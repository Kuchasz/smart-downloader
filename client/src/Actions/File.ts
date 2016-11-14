import {ActionCreator} from "redux";
import {File, FileDownload} from "../../../domain/Files/Index";
import {ActionScope} from "../../../lib/redux-socket/ActionScope";
import {AddFileActionType, RemoveFileActionType, FinishFileDownloadActionType, UpdateFilesActionType} from "../ActionTypes/File";
import {SocketAction} from "../../../lib/redux-socket/SocketAction";

export interface AddFileAction extends SocketAction {
    type: AddFileActionType;
    id: number;
    url: string;
}

export interface RemoveFileAction extends SocketAction {
    type: RemoveFileActionType;
    id: number;
}

export interface FinishFileDownloadAction extends SocketAction {
    type: FinishFileDownloadActionType;
    id: number;
}

export interface UpdateFilesAction extends SocketAction {
    type: UpdateFilesActionType;
    files: File[];
    fileDownloads: FileDownload[];
}

class FileActionCreators {
    createAddFileAction: ActionCreator<AddFileAction> = (id: number, url: string) => ({
        type: AddFileActionType,
        scope: ActionScope.Both,
        id,
        url
    });
    createRemoveFileAction: ActionCreator<RemoveFileAction> = (id: number) => ({
        type: RemoveFileActionType,
        scope: ActionScope.Local,
        id
    });
    createUpdateFilesAction: ActionCreator<UpdateFilesAction> = (files: File[], fileDownloads: FileDownload[]) => ({
        type: UpdateFilesActionType,
        scope: ActionScope.Local,
        files,
        fileDownloads
    });
    createFinishFileDownloadAction: ActionCreator<FinishFileDownloadAction> = (id: number) => ({
        type: FinishFileDownloadActionType,
        scope: ActionScope.Local,
        id
    });
}

export const fileActionCreators = new FileActionCreators();
export type fileActions = AddFileAction | RemoveFileAction | FinishFileDownloadAction | UpdateFilesAction;