import {EventEmitter} from "events";

export type FileDownloadProcessEvent =
    'FetchingFileInfo'
        | 'LocalFileInitialisation'
        |    'DownloadStarted'
        |    'DownloadProgress'
        |    'DownloadFinish';

export class FileDownloadProcess extends EventEmitter {
    constructor() {
        super();
    }

    emit(event: 'FetchingFileInfo');
    emit(event: 'LocalFileInitialisation');
    emit(event: 'DownloadStarted');
    emit(event: 'DownloadProgress', progress: number);
    emit(event: 'DownloadFinish');
    emit(event: string, ...args: any[]): boolean {
        return super.emit(event, ...args);
    };

    on(event: 'FetchingFileInfo', listener: () => void);
    on(event: 'LocalFileInitialisation', listener: () => void);
    on(event: 'DownloadStarted', listener: () => void);
    on(event: 'DownloadProgress', listener: (progress: number) => void);
    on(event: 'DownloadFinish', listener: () => void);
    on(event: string, listener: Function): this {
        return <this>super.on(event, listener);
    }
}