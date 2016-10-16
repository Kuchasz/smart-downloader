// import * as path from "path";
// import { config } from "./config";
import * as http from "http";
// import * as url from "url";
// import * as util from "util";
// import * as net from "net";
import * as fs from "fs";
import * as events from 'events';

import * as socketIO from "socket.io";

// import * as Rx from 'rxjs/Rx';
// import * as mime from 'mime';

import { DownloadThread } from "./src/Downloader/Models/DownloadThread";
// var DownloadThread = require('./src/Downloader/Models/DownloadThread').DownloadThread;
// import { Downloader } from "./src/Downloader/Downloader";


let traffic = 0;

// const server = app.listen(3000, () => {
//   console.log('listening on *:3000');
// });

// const io = new socketio(server);

var httpServer = http.createServer();

httpServer.listen({
  port:8081
});

const io = socketIO(httpServer);

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
// const __url = () => _urls[Math.round(Math.random()*_urls.length)];
// const _url = 'http://movietrailers.apple.com/movies/lionsgate/nerve/nerve-tlr2_h480p.mov';
// const _url = __url();
// const _url = 'http://178.216.139.23:666/100MB.zip';
// const _url = 'http://www.google.pl';

// var httpService = _down.getFileInfo(_url);
// console.log(httpService);

const _getLengthFromHeaders = (headers: any): Promise<number> => {
  return new Promise<number>((resolve, reject)=>{
    try {
      const length = headers['content-range'].split('/')[1];
      resolve(length);
    } catch (e){
      reject();
    }
  });
}

const _getHeadersFromRequestResponse = (request: http.ClientRequest): Promise<number> => {
  return new Promise<number>((resolve, reject)=>{
    request.once('response', (msg: http.IncomingMessage)=>{
      _getLengthFromHeaders(msg.headers)
        .then(resolve)
        .catch(reject);
    });
  });
}

const _handleRequestError = (request: http.ClientRequest): Promise<void> => {
  return new Promise<void>((resolve, reject)=>{
    request.once('error', (err)=>{
      resolve(err);
    });
  });
};

const _getFileLength = (url: string): Promise<number> => {
  return new Promise<number>((res, rej)=>{
    const _req = http.request(url);

    _getHeadersFromRequestResponse(_req).then(res).catch(rej);
    _handleRequestError(_req).then(rej);

    _req.setHeader('Range', 'bytes=0-')
    _req.end();
  });
}

const _getFile = (url: string, thread: DownloadThread): DownloadProcess => {
    const _req = http.request(url);
    let downloadProcess = new DownloadProcess(0,0,0);

    _req.once('response', (msg: http.IncomingMessage)=>{
      let position:number = thread.start;
      downloadProcess.emit('start');

      msg.on('data', (buffer: Buffer)=>{
        fs.write(thread.fd, buffer, 0, buffer.length, position);
        position += buffer.length;
        downloadProcess.emit('progress', buffer.length);
      });

      msg.on('end', ()=>{
        downloadProcess.emit('finnish');
      });

    });

    _req.setHeader('Range', `bytes=${thread.start}-${thread.end}`);
    _req.end();

    return downloadProcess;
};

// const getFile = (url, fd, start, end) => {
//   const _req = http.request(url);
//   let _pos = start;
//   const msg = Rx.Observable.fromEvent(_req, 'response');
//   const resp = msg.mergeMap((x: http.IncomingMessage) => Rx.Observable.fromEvent(x, 'data'))
//     .map((buffer: Buffer) => {
//       fs.write(fd, buffer, 0, buffer.length, _pos);
//       _pos += buffer.length;
//       return buffer.length;
//     })
//     .takeUntil(msg.mergeMap((x: http.IncomingMessage) => Rx.Observable.fromEvent(x, 'end')))
//
//   _req.setHeader('Range', `bytes=${start}-${end}`);
//   _req.end();
//
//   return resp;
// };

// var createThreads = (amount, length: number, fd) => {
//   const threads = [];
//   const perThreadLength = Math.floor(length/amount);
//   for (var i=0; i<amount; i++){
//     threads.push(new DownloadThread(i*perThreadLength, i == (amount-1) ? length : (i+1)*perThreadLength-1, fd));
//   }
//   return threads;
// };

const _initFile = (fileName: string, fileLength: number):Promise<void> => {
  return new Promise<void>((resolve, reject)=>{
    fs.writeFile(fileName, Buffer.allocUnsafe(1), (err)=>{
      if(err === null) resolve(); else reject();
    });
  });
}

const _openFile = (fileName: string): Promise<number> => {
  return new Promise<number>((resolve, reject)=>{
    fs.open(fileName, 'w', (err, fd)=>{
      if (err === null) resolve(fd); else reject();
    });
  });
}

const _resizeFile = (fd: number, length: number): Promise<void> => {
  return new Promise<void>((resolve, reject)=>{
    fs.ftruncate(fd, length, (err)=>{
      if (err === null) resolve(); else reject();
    });
  });
}

type downloadProcessEvents = 'start' | 'progress' | 'finnish';

class DownloadProcess extends events.EventEmitter{
  constructor(public start:number, public end:number, public fd:number){
    super();
  }
  emit(event: downloadProcessEvents, ...args: any[]): boolean{
    return super.emit(event, ...args);
  };
  on(event: downloadProcessEvents, listener: Function): this {
    return <this>super.on(event, listener);
  }
}
//
// const fff:Download = new Download(0, 1, 5);
// fff.

const _createThreads = (fd: number, length: number, threadsCount: number = 5): Promise<DownloadThread[]> => {
  return new Promise<DownloadThread[]>((resolve, reject)=>{
    const perThreadLength = Math.floor(length/threadsCount);
    const threads = Array.from(Array(threadsCount)).map((v, i)=>{
      return new DownloadThread(i*perThreadLength, i == (threadsCount-1) ? length : (i+1)*perThreadLength-1, fd)
    });
    resolve(threads);
  });
}

// const downloadFile = (url, uploader) => {
//   const _fileNName = path.join(__dirname, `/assets/storage/temp/_${new Date().getTime()}_labo.dmd`);
//   const gotFileLength = Rx.Observable.fromPromise(_getFileLength(url)).share();
//   const initFile  = gotFileLength.mergeMap(length =>{
//     return Rx.Observable.bindNodeCallback<string, Buffer, number>(fs.writeFile)(_fileNName, Buffer.allocUnsafe(1)).map(x => length).take(1);
//   });
//   initFile.subscribe(x=>console.log(x));
//   const fileOpen = initFile.mergeMap(length =>
//     Rx.Observable.bindNodeCallback(fs.open)(_fileNName, 'w')
//       .do((fd: number) => fs.ftruncateSync(fd, length))
//       .map((fd: number) => ({fd, length})).take(1));
//   const threadsCreated = fileOpen.mergeMap(x => createThreads(5, x.length, x.fd).map(thread => ({length: x.length, thread})));
//   const downloadBegin = threadsCreated.mergeMap(t => getFile(url, t.thread.fd, t.thread.start, t.thread.end).map(y => ({length: t.length, val: y})));
//   const downloadProgress = downloadBegin.scan((l, r) => ({length: r.length, val: l.val + r.val}), {length: 0, val: 0})
//     .map(x => Math.floor(x.val / x.length * 100))
//     .distinctUntilChanged();
//   const downloadEnd = downloadProgress.takeLast(1);
//   // return gotFileLength.merge(initFile.merge(fileOpen.merge(threadsCreated.merge(downloadBegin.merge(downloadProgress.merge(downloadEnd))))));
//   return downloadProgress;
// }

// downloadFile(_url, {}).subscribe(x=>console.log(x));

// _getFileLength(_url)
//   .then(length => console.log(`File length: ${length}`));

const __downloadFile  = (url: string, id: number, sock: SocketIO.Socket) => {
  var __ = {
    length: 0,
    fd: 0,
    downloadedLength: 0,
    progress: undefined
  };

  _getFileLength(url)
  .then(length => {
    __.length = length;
    return _initFile('test', length)
  })
  .then(() => _openFile('test'))
  .then(fd => {
    __.fd = fd;
    return _resizeFile(__.fd, __.length);
  })
  .then(() => _createThreads(__.fd, __.length))
  .then(threads => (threads.map(thread => _getFile(url, thread))))
  .then(ps => {
      ps.forEach(psss=>{
        psss.on('progress', (p)=>{
          __.downloadedLength += p;
          const progress = Math.floor(100*(__.downloadedLength/__.length));
          if (progress !== __.progress){
              __.progress = progress;
              sock.emit('download-progress', {id, progress });
              console.log(`Download progress: ${progress}%`);
          }
      });
  });
});
}



// _createThreads(11, 23423, 5).then(threads=>threads.forEach(thread => _getFile(_url, thread)));

// const asyncDownloadFile = (url: string) => {
//   const _targetFilePath = path.join(__dirname, `/assets/storage/temp/_${new Date().getTime()}_labo.dmd`);
//   getFileLength(url)
//     .then();
// }

// _initFile('/var/www/foo', 1);

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
    __downloadFile(d.url, d.id, socket);
    // downloadFile(d.url, socket)
    // .subscribe(x => {
    //   console.log(x);
    //   socket.emit('download-progress', {id: d.id, progress:x});
    // });
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
