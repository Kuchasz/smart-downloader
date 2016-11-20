import {Action} from "../../../lib/lefrex/Action";
export class UpdateFileDownloadProgressAction extends Action{
    constructor(public id: number, public progress: number){
        super();
    }
}