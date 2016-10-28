import * as http from "http";
import * as fs from "fs";

import * as urlApi from 'url';
import * as pathApi from 'path';

import * as socketIO from "socket.io";

import {File, FileDownload, FileDownloadState} from "../domain/Files/Index";
import Timer = NodeJS.Timer;
import {fileRepository} from "../data/repositories/Files/fileRepository";

import {Downloader} from "../lib/Downloader/Downloader";

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
			_downloader.download(d.url, d.id, 5);
		}
	});

	socket.on('disconnect', () => {
		console.log('User disconnected');
		_connectedClients.splice(_connectedClients.indexOf(_client), 1);
	});
});
