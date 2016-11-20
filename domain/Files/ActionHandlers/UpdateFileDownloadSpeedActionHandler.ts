import {UpdateFileDownloadSpeedAction} from "../../../messages/Files/actions/UpdateFileDownloadSpeedAction";
import {IActionHandler} from "../../../lib/lefrex/IActionHandler";
import {IActionResult} from "../../../lib/lefrex/IActionResult";
import FileRepository from "../../../data/repositories/Files/FileRepository";
export class UpdateFileDownloadSpeedActionHandler implements IActionHandler<UpdateFileDownloadSpeedAction>{
    handle(action: UpdateFileDownloadSpeedAction): IActionResult {
        const fileToUpdate = FileRepository.get(action.id);
        fileToUpdate.download.speed = action.speed;
        return undefined;
    }
}