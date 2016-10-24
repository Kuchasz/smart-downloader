import { ActionCreator, Action } from "redux";
import { File, FileDownload } from "../../../../domain/Files/Index";

export class AddFileAction implements Action{
	type: string;
	constructor(public id: number, public name: string){
		this.type = 'ADD_FILE';
	}
}

export class RemoveFileAction implements Action{
	type: string;
	constructor(public id: number){
		this.type = 'REMOVE_FILE';
	}
}

export class UpdateFileProgressAction implements Action{
	type: string;
	constructor(public id: number, public progress: number, public speed: number){
		this.type = 'UPDATE_FILE_PROGRESS';
	}
}

export class FinishFileDownloadAction implements Action{
	type: string;
	id: number;
}

export interface UpdateFilesAction extends Action {
	type: string;
	files: File[];
	fileDownloads: FileDownload[];
}

class FileActionCreators {
	createAddFileAction: ActionCreator<AddFileAction> = (id: number, name: string) => ({type: 'ADD_FILE', id, name });
	createRemoveFileAction: ActionCreator<RemoveFileAction> = (id: number) => new RemoveFileAction(id);
	createUpdateFileProgressAction: ActionCreator<UpdateFileProgressAction> = (id: number, progress: number, speed: number) => ({ type: 'UPDATE_FILE_PROGRESS', id, progress, speed });
	createUpdateFilesAction: ActionCreator<UpdateFilesAction> = (files: File[], fileDownloads: FileDownload[]) => ({ type: 'UPDATE_FILES', files, fileDownloads });
	createFinishFileDownloadAction: ActionCreator<FinishFileDownloadAction> = (id: number) => ({type: 'FINISH_FILE_DOWNLOAD', id});
};

export const fileActionCreators = new FileActionCreators();
