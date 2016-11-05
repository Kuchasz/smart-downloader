import {EventEmitter} from "events";
import {File} from './File';
import {FileDownloadProcessEvent} from "../Events/FileDownloadProcessEvents";
import {FileDownloadProcessState} from "./FileDownloadProcessState";

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
    emit(event: FileDownloadProcessEvent, ...args: any[]): boolean {
        return super.emit(event, ...args);
    };

    on(event: 'stateChanged', listener: (state: FileDownloadProcessState) => void);
    on(event: 'speedChanged', listener: (speed: number) => void);
    on(event: 'progressChanged', listener: (progress: number) => void);
    on(event: FileDownloadProcessEvent, listener: Function): this {
        return <this>super.on(event, listener);
    }
}