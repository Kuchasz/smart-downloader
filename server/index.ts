import * as http from "http";
import * as socketIO from "socket.io";

import {fileRepository} from "../data/repositories/Files/fileRepository";

import {Downloader} from "../lib/Downloader/Downloader";
import {FileDownloadState} from "../domain/Files/FileDownload";
import {File} from "../domain/Files/Index";

var httpServer = http.createServer();

httpServer.listen({
    port: 8081
});

const io = socketIO(httpServer);

const _downloader = new Downloader();

interface ConnectedClient {
    socket: SocketIOClient.Socket;
}

const _connectedClients: ConnectedClient[] = [];

setInterval(() => {
    const _progressMessage = Object.assign({}, {files: fileRepository.getAll()}, {type: 'UPDATE_FILES'});
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
            const _process = _downloader.download(d.url, d.id, 5);
            const _file: File = {
                id: d.id,
                length: 0,
                name: `some-random-name-here-${Math.random()}`,
                download: {
                    state: FileDownloadState.Init,
                    progress: 0,
                    speed: 0
                }
            };

            _process.on('DownloadStarted', () => {
                console.log('download-start');
                _file.download.state = FileDownloadState.Init;
                fileRepository.save(_file);
            });

            _process.on('DownloadFinish', () => {
                console.log('download-finish');
                _file.download.state = FileDownloadState.Ended;
            });

            _process.on("DownloadProgress", (p) => {
                _file.download.state = FileDownloadState.Progress;
            });
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        _connectedClients.splice(_connectedClients.indexOf(_client), 1);
    });
});
