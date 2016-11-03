import * as http from "http";
import * as socketIO from "socket.io";

import {fileRepository} from "../data/repositories/Files/fileRepository";

import {Downloader} from "../lib/Downloader/Downloader";
import {FileDownloadState} from "../domain/Files/FileDownload";
import {File} from "../domain/Files/Index";
import {FileDownloadProcessState} from "../lib/Downloader/Entities/FileDownloadProcess";

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
                name: '',
                download: {
                    state: FileDownloadState.Init,
                    progress: 0,
                    speed: 0
                }
            };

            _process.on('stateChanged', (state)=>{
                if(state === FileDownloadProcessState.Started){
                    _file.name = _process.file.fileName;
                    _file.length = _process.file.length;
                    _file.download.state = FileDownloadState.Progress;
                    fileRepository.save(_file);
                }
                if(state === FileDownloadProcessState.Ended){
                    _file.download.state = FileDownloadState.Ended;
                }
            });

            _process.on('progressChanged', (progress)=>{
                console.log(progress);
                _file.download.progress = progress;
            });

            _process.on('speedChanged', (speed)=>{
                _file.download.speed = speed;
            });

        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        _connectedClients.splice(_connectedClients.indexOf(_client), 1);
    });
});
