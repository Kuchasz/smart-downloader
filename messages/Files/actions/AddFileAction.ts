import {Action} from "../../../lib/lefrex/Action";
export class AddFileAction extends Action{
    constructor(public id: number, public url: string, public name: string, public length: number){
        super();
    }
}