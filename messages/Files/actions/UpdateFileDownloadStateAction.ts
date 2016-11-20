import {Action} from "../../../lib/lefrex/Action";
import {FileDownloadState} from "../../../domain/Files/FileDownload";
export class UpdateFileDownloadStateAction extends Action{
    constructor(public id: number, public state: FileDownloadState){
        super();
    }
}