import {ActionCreator} from "redux";
import {File, FileDownload} from "../../../domain/Files/Index";
import {ActionScope} from "../../../lib/redux-socket/ActionScope";
import {
    AddFileActionType, RemoveFileActionType, FinishFileDownloadActionType,
    UpdateFilesActionType, UpdateFilesActionTypeConst
} from "../ActionTypes/File";

export type AddFileAction = {
    type: AddFileActionType;
    id: number;
    url: string;
}

export type RemoveFileAction = {
    type: RemoveFileActionType;
    id: number;
}

export type FinishFileDownloadAction = {
    type: FinishFileDownloadActionType;
    id: number;
}

export type UpdateFilesAction = {
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
        id
    });
    createUpdateFilesAction: ActionCreator<UpdateFilesAction> = (files: File[], fileDownloads: FileDownload[]) => ({
        type: UpdateFilesActionTypeConst,
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
