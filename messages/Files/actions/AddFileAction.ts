import {Action} from "../../../lib/lerfex/Action";
export class AddFileAction extends Action{
    constructor(public url: string){
        super();
    }
}