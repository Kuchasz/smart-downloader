import {IMessage} from "../Message";
export class Subscribtion{
    messageType: string;
    constructor(message: IMessage){
        this.messageType = message.$type;
    }
}