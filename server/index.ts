import * as http from "http";
import * as fs from "fs";
import * as events from 'events';
import * as urlApi from 'url';
import * as pathApi from 'path';

import * as socketIO from "socket.io";

import {DownloadThread} from "./src/Downloader/Models/DownloadThread";
import {File, FileDownload, FileDownloadState} from "../domain/Files/Index";
import Timer = NodeJS.Timer;
import {fileRepository} from "../data/repositories/Files/fileRepository";

var httpServer = http.createServer();

httpServer.listen({
	port: 8081
});

const io = socketIO(httpServer);

const _getFileNameFromUrl = (url: string): string => (pathApi.basename(urlApi.parse(url).pathname));

const _getLengthFromHeaders = (headers: any): Promise<number> => {
	return new Promise<number>((resolve, reject)=> {
		try {
			const length = headers['content-range'].split('/')[1];
			resolve(length);
		} catch (e) {
			reject();
		}
	});
};

const _getHeadersFromRequestResponse = (request: http.ClientRequest): Promise<number> => {
	return new Promise<number>((resolve, reject)=> {
		request.once('response', (msg: http.IncomingMessage) => {
			_getLengthFromHeaders(msg.headers)
				.then(resolve)
				.catch(reject);
		});
	});
};

const _handleRequestError = (request: http.ClientRequest): Promise<Error> => {
	return new Promise<Error>((resolve, reject)=> {
		request.once('error', (err)=> {
			resolve(err);
		});
	});
};

const _getRemoteFileLength = (url: string): Promise<number> => {
	return new Promise<number>((res, rej)=> {
		const _req = http.request(url);

		_getHeadersFromRequestResponse(_req).then(res).catch(rej);
		_handleRequestError(_req).then(rej);

		_req.setHeader('Range', 'bytes=0-');
		_req.end();
	});
};

const _startDownloadProcess = (url: string, thread: DownloadThread): DownloadProcess => {
	const _req = http.request(url);
	let downloadProcess = new DownloadProcess(0, 0, 0);

	_req.once('response', (msg: http.IncomingMessage)=> {
		let position: number = thread.start;

		downloadProcess.emit('start');
		msg.on('data', (buffer: Buffer)=> {
			fs.write(thread.fd, buffer, 0, buffer.length, position);
			position += buffer.length;
			downloadProcess.emit('progress', buffer.length);
		});

		msg.on('end', ()=> {
			downloadProcess.emit('finish');
		});

	});

	_req.setHeader('Range', `bytes=${thread.start}-${thread.end}`);
	_req.end();

	return downloadProcess;
};

const _createLocalFile = (fileName: string): Promise<void> => {
	return new Promise<void>((resolve, reject)=> {
		fs.writeFile(fileName, Buffer.allocUnsafe(1), (err)=> {
			if (err === null) resolve(); else reject();
		});
	});
};

const _openLocalFile = (fileName: string): Promise<number> => {
	return new Promise<number>((resolve, reject)=> {
		fs.open(fileName, 'w', (err, fd)=> {
			if (err === null) resolve(fd); else reject();
		});
	});
};

const _resizeLocalFile = (fd: number, length: number): Promise<void> => {
	return new Promise<void>((resolve, reject)=> {
		fs.ftruncate(fd, length, (err)=> {
			if (err === null) resolve(); else reject();
		});
	});
};

type downloadProcessEvents = 'start' | 'progress' | 'finish';

class DownloadProcess extends events.EventEmitter {
	constructor(public start: number, public end: number, public fd: number) {
		super();
	}

	emit(event: downloadProcessEvents, ...args: any[]): boolean {
		return super.emit(event, ...args);
	};

	on(event: downloadProcessEvents, listener: Function): this {
		return <this>super.on(event, listener);
	}
}

const _createDownloadThreads = (fd: number, fileLength: number, threadsCount: number = 5): Promise<DownloadThread[]> => {
	return new Promise<DownloadThread[]>((resolve) => {
		const perThreadLength = Math.floor(fileLength / threadsCount);
		const threads = Array.from(Array(threadsCount)).map((v, i)=> {
			return new DownloadThread(i * perThreadLength, i == (threadsCount - 1) ? fileLength : (i + 1) * perThreadLength - 1, fd)
		});
		resolve(threads);
	});
};

const __downloadFile = (url: string, id: number, numberOfThreads: number) => {

	const _fileDownloadInfo = {
		length: 0,
		fd: 0,
		downloadedLength: 0,
		progress: undefined,
		fileName: _getFileNameFromUrl(url),
		processesFinished: 0,
		chunks: []
	};

	const _newFileDownload: FileDownload = {speed: 0, progress: 0, state: FileDownloadState.Init};
	const _newFile: File = {id, name: _getFileNameFromUrl(url), download: _newFileDownload};

	fileRepository.save(_newFile);

	_getRemoteFileLength(url)
		.then(length => {
			_fileDownloadInfo.length = length;
			return _createLocalFile(_fileDownloadInfo.fileName)
		})
		.then(() => _openLocalFile(_fileDownloadInfo.fileName))
		.then(fd => {
			_fileDownloadInfo.fd = fd;
			return _resizeLocalFile(_fileDownloadInfo.fd, _fileDownloadInfo.length);
		})
		.then(() => _createDownloadThreads(_fileDownloadInfo.fd, _fileDownloadInfo.length, numberOfThreads))
		.then(threads => (threads.map(thread => _startDownloadProcess(url, thread))))
		.then((processes: DownloadProcess[]) => {
			_newFileDownload.state = FileDownloadState.Progress;

			let _downloadSpeedCalculator = setInterval(()=> {
				_newFileDownload.speed = _fileDownloadInfo.chunks.reduce((l, c)=>(l + c), 0);
				_fileDownloadInfo.chunks = [];
			}, 1000);

			processes.forEach((process: DownloadProcess) => {
				process.on('progress', (p: number) => {
					_fileDownloadInfo.downloadedLength += p;

					_fileDownloadInfo.chunks.push(p);

					_newFileDownload.progress = 100 * (_fileDownloadInfo.downloadedLength / _fileDownloadInfo.length);

				});
				process.on('finish', () => {
					_fileDownloadInfo.processesFinished++;
					if (_fileDownloadInfo.processesFinished === numberOfThreads) {
						_newFileDownload.state = FileDownloadState.Ended;
						clearInterval(_downloadSpeedCalculator);
					}
				});
			});
		});
};

interface ConnectedClient {
	socket: SocketIOClient.Socket;
}

const _connectedClients: ConnectedClient[] = [];

setInterval(() => {
	const _progressMessage = Object.assign({}, fileRepository.getAll(), {type: 'UPDATE_FILES'});
	_connectedClients.forEach(c => {
		c.socket.send(_progressMessage);
	});
}, 250);

io.on('connection', (socket: SocketIOClient.Socket) => {
	console.log(`User connected: ${socket.id}`);
	const _client = {socket};

	_connectedClients.push(_client);

	socket.on('message', (d)=> {
		if (d.type === 'ADD_FILE') {
			__downloadFile(d.url, d.id, 5);
		}
	});

	socket.on('disconnect', () => {
		console.log('User disconnected');
		_connectedClients.splice(_connectedClients.indexOf(_client), 1);
	});
});
