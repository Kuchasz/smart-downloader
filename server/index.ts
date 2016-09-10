import * as path from "path";
import { config } from "./config";
import * as http from "http";
import * as url from "url";
import * as util from "util";
import * as net from "net";
import * as fs from "fs";

import * as socketIO from "socket.io";

import * as Rx from 'rxjs/Rx';
import * as mime from 'mime';

import { DownloadThread } from "./src/Downloader/Models/DownloadThread";
// var DownloadThread = require('./src/Downloader/Models/DownloadThread').DownloadThread;
import { Downloader } from "./src/Downloader/Downloader";


let traffic = 0;

// const server = app.listen(3000, () => {
//   console.log('listening on *:3000');
// });

// const io = new socketio(server);

var httpServer = http.createServer((req, res)=>{
  // serve(req, res, ()=>{});
  // console.log(req.url);
  // res.end(req.url, 'utf-8');
  // console.log(connection.headers);
  const _path = path.join(__dirname, '/../../client/build/', req.url);
  console.log(_path);
  const _stream = fs.createReadStream(_path);
  const _stat = fs.statSync(_path);
  // _stream.on('data', (data)=>{
  //   res.write(data, 'utf-8');
  // })
  // _stream.on('end', ()=>{
    res.writeHead(200, {
      'Content-Type': mime.lookup(_path),
      'Content-Length': _stat.size
    });
    // res.end();

    _stream.pipe(res);

  // fs.readFile(_path, (err, cont)=>{
  //
  //   res.writeHead(200, { 'Content-Type': mime.lookup(_path) });
  //   res.write(cont);
  //   res.end('utf-8');
  // });
  // connection.
});

httpServer.listen({
  port:8080
});

const io = socketIO();


// function getExpiration(){
  // request.post('http://rapidu.net/api/getAccountDetails/', { form: config.credentials.rapidu, json:true }, (err, res, body) => {
  //   traffic = body.userTraffic;
  //   console.log(traffic);
  // });
//   setTimeout(getExpiration, 5000);
// };

// getExpiration();
// const _urls = [
//   'http://movietrailers.apple.com/movies/independent/max-steel/max-steel-trailer-1_h1080p.mov',
//   'http://movietrailers.apple.com/movies/independent/silicon-cowboys/silicon-cowboys-trailer-1_h1080p.mov',
//   'http://movietrailers.apple.com/movies/independent/kickboxervengeance/kickboxer-vengeance-trailer-1_h1080p.mov',
//   'http://movietrailers.apple.com/movies/independent/yogahosers/yogahosers-intro-tlr1_h1080p.mov',
//   'http://movietrailers.apple.com/movies/fox/morgan/morgan-tlr1_h1080p.mov'
// ];
// const _url = () => _urls[Math.round(Math.random()*_urls.length)];
 const _url = 'http://movietrailers.apple.com/movies/lionsgate/nerve/nerve-tlr2_h480p.mov';
// const _url = 'http://178.216.139.23:666/100MB.zip';
// const _url = 'http://www.google.pl';

// var httpService = _down.getFileInfo(_url);
// console.log(httpService);

const getFileLength = (url) => (new Promise<number>((res, rej)=>{
  const _req = http.request(url);

  Rx.Observable.fromEvent(_req, 'response')
    .subscribe((msg: http.IncomingMessage)=>{
      res(msg.headers['content-range'].split('/')[1]);
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
  const resp = msg.mergeMap((x: http.IncomingMessage) => Rx.Observable.fromEvent(x, 'data'))
    .map((buffer: Buffer) => {
      fs.write(fd, buffer, 0, buffer.length, _pos);
      _pos += buffer.length;
      return buffer.length;
    })
    .takeUntil(msg.mergeMap((x: http.IncomingMessage) => Rx.Observable.fromEvent(x, 'end')))

  _req.setHeader('Range', `bytes=${start}-${end}`);
  _req.end();

  return resp;
};

var createThreads = (amount, length: number, fd) => {
  const threads = [];
  const perThreadLength = Math.floor(length/amount);
  for (var i=0; i<amount; i++){
    threads.push(new DownloadThread(i*perThreadLength, i == (amount-1) ? length : (i+1)*perThreadLength-1, fd));
  }
  return threads;
};

const downloadFile = (url, uploader) => {
  const _fileNName = path.join(__dirname, `/assets/storage/temp/_${new Date().getTime()}_labo.dmd`);
  const gotFileLength = Rx.Observable.fromPromise(getFileLength(url)).share();
  const initFile  = gotFileLength.mergeMap(length =>{
    return Rx.Observable.bindNodeCallback<string, Buffer, number>(fs.writeFile)(_fileNName, Buffer.allocUnsafe(1)).map(x => length).take(1);
    //(_fileNName, Buffer.allocUnsafe(1), (err)=>{})    .map(x => length).take(1)
  });
  initFile.subscribe(x=>console.log(x));
  const fileOpen = initFile.mergeMap(length =>
    Rx.Observable.bindNodeCallback(fs.open)(_fileNName, 'w')
      .do((fd: number) => fs.ftruncateSync(fd, length))
      .map((fd: number) => ({fd, length})).take(1));
  const threadsCreated = fileOpen.mergeMap(x => createThreads(5, x.length, x.fd).map(thread => ({length: x.length, thread})));
  const downloadBegin = threadsCreated.mergeMap(t => getFile(url, t.thread.fd, t.thread.start, t.thread.end).map(y => ({length: t.length, val: y})));
  const downloadProgress = downloadBegin.scan((l, r) => ({length: r.length, val: l.val + r.val}), {length: 0, val: 0})
    .map(x => Math.floor(x.val / x.length * 100))
    .distinctUntilChanged();
  const downloadEnd = downloadProgress.takeLast(1);
  // return gotFileLength.merge(initFile.merge(fileOpen.merge(threadsCreated.merge(downloadBegin.merge(downloadProgress.merge(downloadEnd))))));
  return downloadProgress;
}

 downloadFile(_url, {}).subscribe(x=>console.log(x));

// down.gotFileLength.subscribe((l)=>console.log(`file length: ${l}`));
// down.initFile.subscribe(()=>console.log('file initialized'));
// down.fileOpen.subscribe(()=>console.log('file opened'));
// down.threadsCreated.subscribe(()=>console.log('threads created'));
// // down.downloadBegin.subscribe(()=>console.log('downloader started'));
// down.downloadProgress.subscribe(()=>console.log('progress'));
// down.downloadEnd.subscribe(()=>console.log('download end'));

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
