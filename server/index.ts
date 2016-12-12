import {createServer} from "http";
// import {createServer as createNetServer} from 'net';
import {fork} from 'child_process';
import * as socketIO from "socket.io";
import {join} from 'path';

// import {Downloader} from "../lib/Downloader/Downloader";
// import {FileDownloadState} from "../domain/Files/FileDownload";
// import {FileDownloadProcessState} from "../lib/Downloader/Entities/FileDownloadProcessState";
// import {IActionRunner} from "../lib/lefrex/IActionRunner";
// import {ActionRunner} from "../lib/lefrex/server/ActionRunner";
// import {AddFileAction} from "../messages/Files/actions/AddFileAction";
import FileRepository from "../data/repositories/Files/FileRepository";
import {QueueHost} from "../lib/kuku/host/QueueHost";
import {QueueClient} from "../lib/kuku/client/QueueClient";
import {SubscribeMessage} from "../lib/kuku/messages/SubscribeMessage";
import {FileAddedMessage} from "../messages/Files/queueMessages/FileAddedMessage";
// import {AddFileActionHandler} from "../domain/Files/ActionHandlers/AddFileActionHandler";
// import {UpdateFileDownloadStateAction} from "../messages/Files/actions/UpdateFileDownloadStateAction";
// import {UpdateFileDownloadStateActionHandler} from "../domain/Files/ActionHandlers/UpdateFileDownloadStateActionHandler";
// import {UpdateFileDownloadSpeedActionHandler} from "../domain/Files/ActionHandlers/UpdateFileDownloadSpeedActionHandler";
// import {UpdateFileDownloadProgressActionHandler} from "../domain/Files/ActionHandlers/UpdateFileDownloadProgressActionHandler";
// import {UpdateFileDownloadProgressAction} from "../messages/Files/actions/UpdateFileDownloadProgressAction";
// import {UpdateFileDownloadSpeedAction} from "../messages/Files/actions/UpdateFileDownloadSpeedAction";
// import {MessageQueue} from "../lib/kuku/MessageQueue";

const _httpServer = createServer();

_httpServer.listen({
    port: 8081
});

const _socketIoServer = socketIO(_httpServer);

// const _downloader = new Downloader();

interface ConnectedClient {
    socket: SocketIOClient.Socket;
}

const _connectedClients: ConnectedClient[] = [];

// const _actionRunner: IActionRunner = new ActionRunner([
//     AddFileActionHandler,
//     UpdateFileDownloadStateActionHandler,
//     UpdateFileDownloadSpeedActionHandler,
//     UpdateFileDownloadProgressActionHandler
// ]);

setInterval(() => {
    const _progressMessage = Object.assign({}, {files: FileRepository.getAll()}, {type: 'updateFilesAction'});
    _connectedClients.forEach(c => {
        c.socket.send(_progressMessage);
    });
}, 250);

// const _clients = [];
// const __serv = createNetServer((sock) => {
//     console.log('[Server] Client connected to queueMessages!');
//     _clients.push(sock);
// });
//
// __serv.listen(6666, 'localhost');

// setInterval(() => {
//     const _ = JSON.stringify({
//         id: Math.random(),
//         from: 'Server'
//     });
//     _clients.forEach((c)=>{
//         c.write(_);
//     });
// }, 100);

const _queueHost = new QueueHost();
_queueHost.listen();

fork(join(__dirname, '../', '/jobs/notifier'));
fork(join(__dirname, '../', '/jobs/downloader'));

const _queueClient = new QueueClient();
_queueClient.push(new SubscribeMessage(FileAddedMessage));
// _notifier.send('message');
// _downloader.send('message');

_socketIoServer.on('connection', (socket: SocketIOClient.Socket) => {
    console.log(`User connected: ${socket.id}`);
    const _client = {socket};

    _connectedClients.push(_client);

    socket.on('message', (action: any) => {
        if (action!.type === 'addFileAction') {
            // const _process = _downloader.download(action.url, 5);
            // _process.on('stateChanged', (state)=>{
            //     if(state === FileDownloadProcessState.Started){
            //         const addFileAction = new AddFileAction(action.id, action.url, _process.file.fileName, _process.file.length);
            //         _actionRunner.run(addFileAction);
            //     }
            //     if(state === FileDownloadProcessState.Ended){
            //         const updateFileDownloadStateAction = new UpdateFileDownloadStateAction(action.id, FileDownloadState.Ended);
            //         _actionRunner.run(updateFileDownloadStateAction);
            //     }
            // });
            //
            // _process.on('progressChanged', (progress)=>{
            //     const updateFileDownloadProgressAction = new UpdateFileDownloadProgressAction(action.id, progress);
            //     _actionRunner.run(updateFileDownloadProgressAction);
            // });
            //
            // _process.on('speedChanged', (speed)=>{
            //     const updateFileDownloadSpeedAction = new UpdateFileDownloadSpeedAction(action.id, speed);
            //     _actionRunner.run(updateFileDownloadSpeedAction);
            // });
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        _connectedClients.splice(_connectedClients.indexOf(_client), 1);
    });
});
