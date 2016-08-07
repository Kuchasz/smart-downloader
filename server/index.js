var request = require('request');
var path = require('path');
var config = require('./config');
var http = require('http');
var url = require('url');
var util = require('util');
var net = require('net');
var fs = require('fs');
var Rx = require('rxjs/Rx');
var downloader = require('mt-downloader');
var DownloadThread = require('./src/Downloader/Models/DownloadThread').DownloadThread;

let traffic = 0;

const express = require('express');
const socketio = require('socket.io');
const app = express();
const server = app.listen(3000, () => {
  console.log('listening on *:3000');
});

const io = new socketio(server);

// function getExpiration(){
  // request.post('http://rapidu.net/api/getAccountDetails/', { form: config.credentials.rapidu, json:true }, (err, res, body) => {
  //   traffic = body.userTraffic;
  //   console.log(traffic);
  // });
//   setTimeout(getExpiration, 5000);
// };

// getExpiration();

// const _url = 'http://movietrailers.apple.com/movies/universal/jasonbourne/jasonbourne-tlr1_h1080p.mov';
const _url = 'http://movietrailers.apple.com/movies/lionsgate/nerve/nerve-tlr2_h480p.mov';
// const _url = 'http://178.216.139.23:666/100MB.zip';
// const _url = 'http://www.google.pl';

const getFileLength = (url) => (new Promise((res, rej)=>{
  const _req = http.request(url);

  Rx.Observable.fromEvent(_req, 'response')
    .subscribe((ev)=>{
      res(ev.headers['content-range'].split('/')[1]);
    });

  Rx.Observable.fromEvent(_req, 'error')
    .subscribe((err)=>{
      rej(err);
    });

  _req.setHeader('Range', 'bytes=0-')
  _req.end();
  })
);

const getFile = (url, fd, start, end) => {
  const _req = http.request(url);
  let _pos = start;
  const resp = Rx.Observable.fromEvent(_req, 'response')
  .mergeMap(x => Rx.Observable.fromEvent(x, 'data'))
  .map(x => {
    fs.write(fd, x, 0, x.length, _pos);
    _pos += x.length;
    return x.length;
  });

  _req.setHeader('Range', `bytes=${start}-${end}`);
  _req.end();

  return resp;
};



var createThreads = (amount, length, fd) => {
  const threads = [];
  const perThreadLength = Math.floor(length/amount);
  for (var i=0; i<amount; i++){
    threads.push(new DownloadThread(i*perThreadLength, i == (amount-1) ? length : (i+1)*perThreadLength-1, fd));
  }
  return threads;
};

const downloadFile = (url, uploader) => {
  const _fileNName = `../assets/storage/temp/_${new Date().getTime()}_labo.sdc`;
  Rx.Observable
    .fromPromise(getFileLength(url))
    .mergeMap(length =>
      Rx.Observable.bindNodeCallback(fs.writeFile)(_fileNName, Buffer.allocUnsafe(parseInt(length)), {})
      .map(x => length))
    .mergeMap((length) =>
      Rx.Observable.bindNodeCallback(fs.open)(_fileNName, 'w')
      .map(fd => ({fd, length})))
    .mergeMap(x => createThreads(5, x.length, x.fd).map(thread => ({length: x.length, thread})))
    .mergeMap(t => getFile(_url, t.thread.fd, t.thread.start, t.thread.end).map(y => ({length: t.length, val: y})))
    .scan((l, r) => ({length: r.length, val: l.val + r.val}), {length: 0, val: 0})
    .map(x => Math.floor(x.val / x.length * 100))
    .distinctUntilChanged()
    .subscribe(x => uploader.emit('download-progress', x));
}


// const downloadFile = (url, uploader) => {
//   const {name, ext} = path.parse(url);
//   downloader.CreateMTDFile({url, path: `../${name}${ext}`})
//     .last()
//     .subscribe((x)=>{
//       console.log('Download started.');
//       const downloading = downloader.DownloadFromMTDFile(`../${name}${ext}.mtd`);
//
//       downloader.Completion(downloading.filter(x=>x[0]=='meta$').map(x=>x[1]))
//       .distinctUntilChanged()
//       .map(x=>Math.floor(x*100))
//       .subscribe(x=>{
//         console.log(`${name}${ext}(${x}%)`);
//         uploader.emit('download-progress', x);
//       });
//
//       const [{meta$}] = demux(downloading, 'meta$');
//       const [{fdR$}] = demux(downloading, 'fdR$');
//
//       const downloaded = downloader.FinalizeDownload({meta$: meta$, fd$: fdR$});
//
//       downloaded.map(x=>x[0]).subscribe(x=>console.log(`File ${x}.`));
//     });
// }

// downloadFile(url);

// Run server to listen on port 3000.



// app.use(express.static(path.resolve(__dirname, '../client/build')));

// io.on('connection', (socket)=>{
//   console.log('client connected');
//   setInterval(()=>socket.emit('foo', Math.random()), 1000)
// });

// Rx.Observable.fromEvent(io, 'connection').subscribe((socket)=>console.log('client-connetec'));

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('download-file', (d)=>{
    downloadFile(d, socket);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
