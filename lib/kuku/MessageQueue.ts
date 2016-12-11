import {IMessageQueue} from "./IMessageQueue";
export class MessageQueue implements IMessageQueue{
    subscribe<T>(onMessageHandler: (msg: T) => void) {
    }
    emit<T>(message: T): void {
    }
}