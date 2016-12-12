import {QueueMessage} from "../QueueMessage";
import {Subscribtion} from "./Subscribtion";
import {IMessage} from "../Message";
export class SubscribeMessage extends QueueMessage<Subscribtion>{
    $type: string = 'SubscribeMessage';
    message: Subscribtion;
    constructor(message: {new (...params: any[]): IMessage}){
        super(new Subscribtion(new message([])));
    }
}