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
var down = require('./src/Downloader/Downloader').Downloader;

// const _down = new down();
// _down.list('../assets/storage/temp');

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
// const _url = 'http://movietrailers.apple.com/movies/lionsgate/nerve/nerve-tlr2_h480p.mov';
// const _url = 'http://178.216.139.23:666/100MB.zip';
// const _url = 'http://www.google.pl';

// var httpService = _down.getFileInfo(_url);
// console.log(httpService);

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
  const msg = Rx.Observable.fromEvent(_req, 'response');
  const resp = msg.mergeMap(x => Rx.Observable.fromEvent(x, 'data'))
    .map(buffer => {
      fs.write(fd, buffer, 0, buffer.length, _pos);
      _pos += buffer.length;
      return buffer.length;
    })
    .takeUntil(msg.mergeMap(x=> Rx.Observable.fromEvent(x, 'end')))

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
  const _fileNName = `../assets/storage/temp/_${new Date().getTime()}_labo.dmd`;
  return Rx.Observable
    .fromPromise(getFileLength(url))
    .mergeMap(length =>
      Rx.Observable.bindNodeCallback(fs.writeFile)(_fileNName, Buffer.allocUnsafe(parseInt(1)), {})
      .map(x => length).take(1))
    .mergeMap((length) =>
      Rx.Observable.bindNodeCallback(fs.open)(_fileNName, 'w')
      .do(fd => fs.ftruncateSync(fd, length))
      .map(fd => ({fd, length})).take(1))
    .mergeMap(x => createThreads(5, x.length, x.fd).map(thread => ({length: x.length, thread})))
    .mergeMap(t => getFile(url, t.thread.fd, t.thread.start, t.thread.end).map(y => ({length: t.length, val: y})))
     .scan((l, r) => ({length: r.length, val: l.val + r.val}), {length: 0, val: 0})
     .map(x => Math.floor(x.val / x.length * 100))
     .distinctUntilChanged()
}

// var down = downloadFile(_url, {}).share();
//
// down
//   .subscribe(x => console.log(`${x}%`));
//
// down
//   .takeLast(1)
//   .subscribe(x => console.log(`Last strean: ${x}%`));


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
    downloadFile(d.url, socket)
    .subscribe(x => {
      console.log(x);
      socket.emit('download-progress', {id: d.id, progress:x});
    });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
