import {Config} from "./config";
import {createServer, Server, Socket} from 'net';
import {IMessage} from "./messages";

export interface IQueueHost{

}

export class QueueHost {
    private _server: Server;
    private _clients: Socket[] = [];

    constructor(port: number = Config.port, host: string = Config.host) {
        this._server = createServer();
        this._server.on('connection', (client: Socket) => {
            this._clients.push(client);
            client.on('close', () => {
                const clientIndex = this._clients.indexOf(client);
                this._clients = [...this._clients.slice(0, clientIndex - 1), ...this._clients.slice(clientIndex + 1)];
            });
            client.on('data', (buffer) => {
                const messageString: IMessage = JSON.parse(buffer.toString());
                console.log('[Server] Received message: ', messageString.$type);
                this._clients.forEach(c => c.write(buffer.toString()));
            });
        });
        this._server.listen(port, host);
    }

    listen() {
    }
}