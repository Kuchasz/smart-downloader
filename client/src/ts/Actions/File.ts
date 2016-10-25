import { ActionCreator } from "redux";
import { File, FileDownload } from "../../../../domain/Files/Index";
import {Action, ActionScope} from "../../../../communication/Actions/Action";

export interface AddFileAction extends Action{
	id: number;
	url: string;
}

export interface RemoveFileAction extends Action{
	id: number;
}

export interface UpdateFileProgressAction extends Action{
	id: number;
	progress: number;
	speed: number;
}

export interface FinishFileDownloadAction extends Action{
	id: number;
}

export interface UpdateFilesAction extends Action {
	files: File[];
	fileDownloads: FileDownload[];
}

class FileActionCreators {
	createAddFileAction: ActionCreator<AddFileAction> = (id: number, url: string) => ({type: 'ADD_FILE', executionMode: ActionScope.Both, id, url });
	createRemoveFileAction: ActionCreator<RemoveFileAction> = (id: number) => ({type: 'REMOVE_FILE', executionMode: ActionScope.Both, id});
	createUpdateFileProgressAction: ActionCreator<UpdateFileProgressAction> = (id: number, progress: number, speed: number) => ({ type: 'UPDATE_FILE_PROGRESS', executionMode: ActionScope.Local, id, progress, speed });
	createUpdateFilesAction: ActionCreator<UpdateFilesAction> = (files: File[], fileDownloads: FileDownload[]) => ({ type: 'UPDATE_FILES', executionMode: ActionScope.Local, files, fileDownloads });
	createFinishFileDownloadAction: ActionCreator<FinishFileDownloadAction> = (id: number) => ({type: 'FINISH_FILE_DOWNLOAD', executionMode: ActionScope.Local, id});
};

export const fileActionCreators = new FileActionCreators();
