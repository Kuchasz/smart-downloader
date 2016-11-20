import {Action} from "../../../lib/lefrex/Action";
export class UpdateFileDownloadSpeedAction extends Action{
    constructor(public id: number, public speed: number){
        super();
    }
}