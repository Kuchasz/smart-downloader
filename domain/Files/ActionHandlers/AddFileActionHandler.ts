import {IActionHandler} from "../../../lib/lefrex/IActionHandler";
import {AddFileAction} from "../../../messages/Files/actions/AddFileAction";
import {IActionResult} from "../../../lib/lefrex/IActionResult";
import FileRepository from "../../../data/repositories/Files/FileRepository";
import {File} from '../../../domain/Files/File';
import {FileDownloadState} from "../FileDownload";

export class AddFileActionHandler implements IActionHandler<AddFileAction>{
    handle(action: AddFileAction): IActionResult {

        const fileToAdd: File ={
            id: action.id,
            length: action.length,
            name: action.name,
            url: action.url,
            download: {
                state: FileDownloadState.Init,
                progress: 0,
                speed: 0
            }
        };

        FileRepository.save(fileToAdd);
        return undefined;
    }
}