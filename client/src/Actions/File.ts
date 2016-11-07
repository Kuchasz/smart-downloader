import { ActionCreator } from "redux";
import { File, FileDownload } from "../../../domain/Files/Index";
import {SocketAction} from "../../../lib/redux-socket/SocketAction";
import {ActionScope} from "../../../lib/redux-socket/ActionScope";

export interface AddFileAction extends SocketAction{
	id: number;
	url: string;
}

export interface RemoveFileAction extends SocketAction{
	id: number;
}

export interface UpdateFileProgressAction extends SocketAction{
	id: number;
	progress: number;
	speed: number;
}

export interface FinishFileDownloadAction extends SocketAction{
	id: number;
}

export interface UpdateFilesAction extends SocketAction {
	files: File[];
	fileDownloads: FileDownload[];
}

class FileActionCreators {
	createAddFileAction: ActionCreator<AddFileAction> = (id: number, url: string) => ({type: 'ADD_FILE', scope: ActionScope.Both, id, url });
	createRemoveFileAction: ActionCreator<RemoveFileAction> = (id: number) => ({type: 'REMOVE_FILE', scope: ActionScope.Both, id});
	createUpdateFileProgressAction: ActionCreator<UpdateFileProgressAction> = (id: number, progress: number, speed: number) => ({ type: 'UPDATE_FILE_PROGRESS', scope: ActionScope.Local, id, progress, speed });
	createUpdateFilesAction: ActionCreator<UpdateFilesAction> = (files: File[], fileDownloads: FileDownload[]) => ({ type: 'UPDATE_FILES', scope: ActionScope.Local, files, fileDownloads });
	createFinishFileDownloadAction: ActionCreator<FinishFileDownloadAction> = (id: number) => ({type: 'FINISH_FILE_DOWNLOAD', scope: ActionScope.Local, id});
};

export const fileActionCreators = new FileActionCreators();
