import {IActionHandler} from "../../../lib/lefrex/IActionHandler";
import {UpdateFileDownloadStateAction} from "../../../messages/Files/actions/UpdateFileDownloadStateAction";
import {IActionResult} from "../../../lib/lefrex/IActionResult";
import FileRepository from "../../../data/repositories/Files/FileRepository";
export class UpdateFileDownloadStateActionHandler implements IActionHandler<UpdateFileDownloadStateAction>{
    handle(action: UpdateFileDownloadStateAction): IActionResult {
        const fileToUpdate = FileRepository.get(action.id);
        fileToUpdate.download.state = action.state;
        return undefined;
    }
}