import {Config} from "../Config";
import {createServer, Server, Socket} from 'net';
import {IMessage} from "../Message";
export class QueueHost {
    private _server: Server;
    private _clients: Socket[] = [];

    constructor(port: number = Config.port, host: string = Config.host) {
        this._server = createServer();
        this._server.on('connection', (client: Socket) => {
            this._clients.push(client);
            client.on('close', () => {
                const clientIndex = this._clients.findIndex(x => x === client);
                this._clients = [...this._clients.slice(0, clientIndex - 1), ...this._clients.slice(clientIndex + 1)];
            });
            client.on('data', (buffer) => {
                const messageString: IMessage = JSON.parse(buffer.toString());
                console.log('[Server] Received message: ', messageString);
                if(messageString.$type === 'SubscribeMessage')
                    console.log(`[Server] [${client.remoteAddress}] subscribed to: `, messageString.$type);
            });
        });
        this._server.listen(port, host);
    }

    listen() {
    }
}