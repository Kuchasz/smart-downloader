import {FileDownloadThread} from "./Entities/FileDownloadThread";
import {ftruncate, writeFile, write, open} from "fs";
import {File} from './Entities/File';
import {FileDownloadProcess} from "./Entities/FileDownloadProcess";
import {ClientRequest, IncomingMessage} from "http";
import {request} from "./Services/HttpRequest";
import {FileDownloadProcessState} from "./Entities/FileDownloadProcessState";

export class Downloader {

    constructor() {
    }

    download(url: string, numberOfThreads: number): FileDownloadProcess {
        const _fileDownloadInfo = {
            fd: 0,
            downloadedLength: 0,
            processesFinished: 0,
            chunks: []
        };

        const _newFile = new File(url);

        let fileLength, localFilePath = this._createLocalFilePath(_newFile.fileName, 'downloads');

        console.log(localFilePath);

        const _process = new FileDownloadProcess(_newFile);
        _process.emit('stateChanged', FileDownloadProcessState.GettingInfo);

        this._getRemoteFileLength(url)
            .then(length => {
                fileLength = length;
                _newFile.length = fileLength;
                _process.emit('stateChanged', FileDownloadProcessState.Initialisation);
                return this._createLocalFile(localFilePath)
            })
            .then(() => this._openLocalFile(localFilePath))
            .then(fd => {
                _fileDownloadInfo.fd = fd;
                return this._resizeLocalFile(_fileDownloadInfo.fd, fileLength);
            })
            .then(() => this._createDownloadThreads(_fileDownloadInfo.fd, fileLength, numberOfThreads))
            .then(threads => (threads.map(thread => this._startDownload(url, thread))))
            .then((threads: FileDownloadThread[]) => {

                let _downloadSpeedCalculator = setInterval(()=> {
                    _process.currentSpeed = _fileDownloadInfo.chunks.reduce((l, c)=>(l + c), 0);
                    _process.emit('speedChanged', _process.currentSpeed);
                    _fileDownloadInfo.chunks = [];
                }, 1000);

                _process.emit('stateChanged', FileDownloadProcessState.Started);


                threads.forEach((thread: FileDownloadThread) => {

                    thread.on('progress', (p: number) => {
                        if (_fileDownloadInfo.downloadedLength === 0) _process.emit('stateChanged', FileDownloadProcessState.Progress);
                        _fileDownloadInfo.downloadedLength += p;
                        _fileDownloadInfo.chunks.push(p);

                        _process.progress = 100 * (_fileDownloadInfo.downloadedLength / fileLength);
                        console.log(_fileDownloadInfo.downloadedLength, fileLength);
                        _process.emit('progressChanged', _process.progress);
                    });

                    thread.on('finish', () => {
                        _fileDownloadInfo.processesFinished++;
                        if (_fileDownloadInfo.processesFinished === numberOfThreads) {
                            _process.emit('stateChanged', FileDownloadProcessState.Ended);
                            clearInterval(_downloadSpeedCalculator);
                        }
                    });
                });
            });
        return _process;
    };

    private _createLocalFilePath(fileName: string, dirName: string): string{
        return `${dirName}/${fileName}`;
    }

    private _getLengthFromHeaders(headers: {[x: string]: string}): Promise<number> {
        return new Promise<number>((resolve, reject)=> {
            try {
                const length = parseInt(headers['content-range'].split('/')[1]);
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
        return new Promise<Error>((resolve)=> {
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
            let _downloadPosition: number = thread.start;
            let _writePosition: number = thread.start;

            thread.emit('start');
            msg.on('data', (downloadBuffer: Buffer)=> {
                write(thread.fd, downloadBuffer, 0, downloadBuffer.length, _downloadPosition, (_err, _length, writeBuffer)=> {
                    thread.emit('progress', writeBuffer.length);
                    _writePosition += writeBuffer.length;
                    if (_writePosition - 1 === thread.end)thread.emit('finish');
                });
                _downloadPosition += downloadBuffer.length;
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
            const processes = Array.from(Array(processesCount)).map((_v, i)=> {
                const _start = i * perProcessLength;
                const _end = (i === perProcessLength) ? fileLength : ((i + 1) * perProcessLength - 1);
                return new FileDownloadThread(_start, _end, fd)
            });
            resolve(processes);
        });
    };
}
