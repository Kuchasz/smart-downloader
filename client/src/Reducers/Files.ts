import {fileActions} from "../Actions/File";
import {UpdateFilesActionType} from "../ActionTypes/File";
export function Files(state = [], action: fileActions) {
	switch (action.type) {
		case UpdateFilesActionType:
		    return action.files;
		default:
			return state;
	}
};
