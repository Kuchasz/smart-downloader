import {fileActions} from "../Actions/File";
import {UpdateFilesActionTypeConst} from "../ActionTypes/File";
export function Files(state = [], action: fileActions) {
	switch (action.type) {
		case UpdateFilesActionTypeConst: {
            // action.
            // action.
            break;
		}
		default:
			return state;
	}
};
