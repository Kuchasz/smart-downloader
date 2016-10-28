import {getDownloadService} from './Services/DownloadServiceProvider';
import {FileDownload, FileDownloadState} from "../../domain/Files/FileDownload";
import {FileDownloadThread} from "./Entities/FileDownloadThread";
import {writeFile, write, open} from "fs";
import {IncomingMessage} from "http";
import {ClientRequest} from "http";
import {request} from "http";
import {ftruncate} from "fs";
import {File} from './Entities/File';
import {FileDownloadProcess, FileDownloadProcessEvent} from "./Entities/FileDownloadProcess";

export class Downloader {

	private fileNameTest = /\.dmd$/;

	constructor() {
	}

	download(url: string, id: number, numberOfThreads: number): FileDownloadProcess {

		const _downloadService = getDownloadService(url);

		const _fileDownloadInfo = {
			fd: 0,
			downloadedLength: 0,
			progress: undefined,
			processesFinished: 0,
			chunks: []
		};

		//should not use domain objects, create downloader-lib objects
		const _newFileDownload: FileDownload = {speed: 0, progress: 0, state: FileDownloadState.Init};
		// const _newFile: File = {id, name: _getFileNameFromUrl(url), download: _newFileDownload, length: 0};
		const _newFile = new File(url);

		let fileLength, fileName = _newFile.fileName;

		// fileRepository.save(_newFile);
		const _process = new FileDownloadProcess();
		_process.emit('FetchingFileInfo');

		this._getRemoteFileLength(url)
			.then(length => {
				fileLength = length;
				_process.emit('LocalFileInitialisation');
				return this._createLocalFile(fileName)
			})
			.then(() => this._openLocalFile(fileName))
			.then(fd => {
				_fileDownloadInfo.fd = fd;
				return this._resizeLocalFile(_fileDownloadInfo.fd, fileLength);
			})
			.then(() => this._createDownloadThreads(_fileDownloadInfo.fd, fileLength, numberOfThreads))
			.then(threads => (threads.map(thread => this._startDownload(url, thread))))
			.then((threads: FileDownloadThread[]) => {
				_process.emit('DownloadStarted');
				_newFileDownload.state = FileDownloadState.Progress;

				let _downloadSpeedCalculator = setInterval(()=> {
					_newFileDownload.speed = _fileDownloadInfo.chunks.reduce((l, c)=>(l + c), 0);
					_fileDownloadInfo.chunks = [];
				}, 1000);

				threads.forEach((thread: FileDownloadThread) => {
					thread.on('progress', (p: number) => {
						_process.emit('DownloadProgress');
						_fileDownloadInfo.downloadedLength += p;

						_fileDownloadInfo.chunks.push(p);

						_newFileDownload.progress = 100 * (_fileDownloadInfo.downloadedLength / fileLength);

					});
					thread.on('finish', () => {
						_fileDownloadInfo.processesFinished++;
						if (_fileDownloadInfo.processesFinished === numberOfThreads) {
							_process.emit('DownloadFinish');
							_newFileDownload.state = FileDownloadState.Ended;
							clearInterval(_downloadSpeedCalculator);
						}
					});
				});
			});
		return _process;
	};

	private _getLengthFromHeaders(headers: any): Promise<number> {
		return new Promise<number>((resolve, reject)=> {
			try {
				const length = headers['content-range'].split('/')[1];
				resolve(length);
			} catch (e) {
				reject();
			}
		});
	};

	private _getHeadersFromRequestResponse(request: ClientRequest): Promise<number> {
		return new Promise<number>((resolve, reject)=> {
			request.once('response', (msg: IncomingMessage) => {
				this._getLengthFromHeaders(msg.headers)
					.then(resolve)
					.catch(reject);
			});
		});
	};

	private _handleRequestError(request: ClientRequest): Promise<Error> {
		return new Promise<Error>((resolve, reject)=> {
			request.once('error', (err)=> {
				resolve(err);
			});
		});
	};

	private _getRemoteFileLength(url: string): Promise<number> {
		return new Promise<number>((res, rej)=> {
			const _req = request(url);

			this._getHeadersFromRequestResponse(_req).then(res).catch(rej);
			this._handleRequestError(_req).then(rej);

			_req.setHeader('Range', 'bytes=0-');
			_req.end();
		});
	};

	private _startDownload(url: string, thread: FileDownloadThread): FileDownloadThread {
		const _req = request(url);

		_req.once('response', (msg: IncomingMessage)=> {
			let position: number = thread.start;

			thread.emit('start');
			msg.on('data', (buffer: Buffer)=> {
				write(thread.fd, buffer, 0, buffer.length, position);
				position += buffer.length;
				thread.emit('progress', buffer.length);
			});

			msg.on('end', ()=> {
				thread.emit('finish');
			});

		});

		_req.setHeader('Range', `bytes=${thread.start}-${thread.end}`);
		_req.end();

		return thread;
	};

	private _createLocalFile(fileName: string): Promise<void> {
		return new Promise<void>((resolve, reject)=> {
			writeFile(fileName, Buffer.allocUnsafe(1), (err)=> {
				if (err === null) resolve(); else reject();
			});
		});
	};

	private _openLocalFile(fileName: string): Promise<number> {
		return new Promise<number>((resolve, reject)=> {
			open(fileName, 'w', (err, fd)=> {
				if (err === null) resolve(fd); else reject();
			});
		});
	};

	private _resizeLocalFile(fd: number, length: number): Promise<void> {
		return new Promise<void>((resolve, reject)=> {
			ftruncate(fd, length, (err)=> {
				if (err === null) resolve(); else reject();
			});
		});
	};

	private _createDownloadThreads(fd: number, fileLength: number, processesCount: number = 5): Promise<FileDownloadThread[]> {
		return new Promise<FileDownloadThread[]>((resolve) => {
			const perProcessLength = Math.floor(fileLength / processesCount);
			const processes = Array.from(Array(processesCount)).map((v, i)=> {
				return new FileDownloadThread(i * perProcessLength, i == (processesCount - 1) ? fileLength : (i + 1) * perProcessLength - 1, fd)
			});
			resolve(processes);
		});
	};
}
