import {IQueueClient} from "./IQueueClient";
import {Config} from "../Config";
import {Socket} from 'net';
import {QueueMessage} from "../QueueMessage";
export class QueueClient implements IQueueClient {
    private _socket: Socket;

    constructor(port: number = Config.port, host: string = Config.host) {
        this._socket = new Socket();
        this._socket.connect(port, host);
    }

    subscribe<T, U extends QueueMessage<T>>(handle: (message: U)=>void): void {
        handle(<any>{});
    }

    push<T, U extends QueueMessage<T>>(message: U): void {
        this._socket.write(JSON.stringify(Object.assign({}, message)));
    }
}