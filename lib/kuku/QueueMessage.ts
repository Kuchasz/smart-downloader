import {IMessage} from "./Message";
export abstract class QueueMessage<T> implements IMessage{
    abstract $type: string;
    message: T;
    constructor(message: T){
        this.message = message;
    }
}