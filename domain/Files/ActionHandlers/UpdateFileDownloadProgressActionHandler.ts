import {UpdateFileDownloadProgressAction} from "../../../messages/Files/actions/UpdateFileDownloadProgressAction";
import {IActionHandler} from "../../../lib/lefrex/IActionHandler";
import {IActionResult} from "../../../lib/lefrex/IActionResult";
import FileRepository from "../../../data/repositories/Files/FileRepository";
import {FileDownloadState} from "../FileDownload";
export class UpdateFileDownloadProgressActionHandler implements IActionHandler<UpdateFileDownloadProgressAction>{
    handle(action: UpdateFileDownloadProgressAction): IActionResult {
        const fileToUpdate = FileRepository.get(action.id);
        fileToUpdate.download.progress = action.progress;
        fileToUpdate.download.state = FileDownloadState.Progress;
        return undefined;
    }
}