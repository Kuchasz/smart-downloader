import {IMessage} from "../../../lib/kuku/messages";

export class File{
    constructor(public name: string){
    }
}
export class FileAddedMessage implements IMessage{
    $type: string = 'FileAddedMessage';
    constructor(readonly file: File){
    }
}
