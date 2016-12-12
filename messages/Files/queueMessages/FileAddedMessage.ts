import {QueueMessage} from "../../../lib/kuku/QueueMessage";
export class File{
    constructor(public name: string){
    }
}
export class FileAddedMessage extends QueueMessage<File>{
    $type: string = 'FileAddedMessage';
    constructor(file: File){
        super(file);
    }
}
