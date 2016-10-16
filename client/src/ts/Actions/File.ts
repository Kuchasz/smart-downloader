import { ActionCreator, Action } from "redux";

export class AddFileAction implements Action{
	type: string;
	constructor(public name: string){
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
	constructor(public id: number, public progress: number){
		this.type = 'UPDATE_FILE_PROGRESS';
	}
}

export class UpdateFilesAction implements Action{
	type: string;
	constructor(){
		this.type = 'UPDATE_FILES';
	}
}

class FileActionCreators {
	createAddFileAction: ActionCreator<AddFileAction> = (name: string) => new AddFileAction(name);
	createRemoveFileAction: ActionCreator<RemoveFileAction> = (id: number) => new RemoveFileAction(id);
	createUpdateFileProgressAction: ActionCreator<UpdateFileProgressAction> = (id: number, progress: number) => new UpdateFileProgressAction(id, progress);
	createUpdateFilesAction: ActionCreator<UpdateFilesAction> = () => new UpdateFilesAction();
};

export const fileActionCreators = new FileActionCreators();
