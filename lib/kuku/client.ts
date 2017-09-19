import {Config} from "./config";
import {Socket} from 'net';
import {
    HandlerFunction, IMessage, MessageContructor, SubscribeMessage, Subscribtion,
    UnsubscribeFunction
} from "./messages";

export interface IQueueClient {
    subscribe<T extends IMessage, U extends MessageContructor<T>>(message: U, handler: HandlerFunction<T>): UnsubscribeFunction;
    push(message: IMessage): void;
}

export class QueueClient implements IQueueClient {
    private _socket: Socket;
    private _subs: Subscribtion<IMessage>[] = [];

    constructor(port: number = Config.port, host: string = Config.host) {
        this._socket = new Socket();

        this._socket.on("data", buffer => {
            const message = JSON.parse(buffer.toString("UTF-8")) as IMessage;
            const targetSubs = this._subs.filter(s => s.message.$type === message.$type);
            targetSubs.forEach(s => s.handler(message));
        });

        this._socket.connect(port, host);
    }

    subscribe<T extends IMessage>(message: MessageContructor<T>, handler: HandlerFunction<T>): UnsubscribeFunction {
        const messageToSubscribe = new (<any>message)() as IMessage;
        const sub = new Subscribtion(messageToSubscribe, handler);
        this._subs = [...this._subs, sub];
        this.push(new SubscribeMessage(messageToSubscribe.$type));
        return () => {
            const subIndex = this._subs.indexOf(sub);
            this._subs = [...this._subs.slice(0, subIndex), ...this._subs.slice(subIndex + 1)];
        };
    }

    push(message: IMessage): void {
        this._socket.write(JSON.stringify({...message}));
    }
}