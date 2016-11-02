import {EventEmitter} from "events";
import {File} from './File';

export enum FileDownloadProcessState{
    Waiting,
    GettingInfo,
    Initialisation,
    Started,
    Progress,
    Ended
}

export type FileDownloadProcessEvent = 'stateChanged'| 'speedChanged'| 'progressChanged';

export class FileDownloadProcess extends EventEmitter {

    progress: number = 0;
    currentSpeed: number = 0;
    state: FileDownloadProcessState = FileDownloadProcessState.Waiting;
    file: File;

    constructor(file: File) {
        super();
        this.file = file;
    }

    emit(event: 'stateChanged', state: FileDownloadProcessState);
    emit(event: 'speedChanged', speed: number);
    emit(event: 'progressChanged', progress: number);
    emit(event: string, ...args: any[]): boolean {
        return super.emit(event, ...args);
    };

    on(event: 'stateChanged', listener: (state: FileDownloadProcessState) => void);
    on(event: 'speedChanged', listener: (speed: number) => void);
    on(event: 'progressChanged', listener: (progress: number) => void);
    on(event: string, listener: Function): this {
        return <this>super.on(event, listener);
    }
}