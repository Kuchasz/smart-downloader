import {EventEmitter} from "events";
import {FileDownloadEvents} from "../Events/FileDownloadEvents";

export enum FileDownloadProcessState{
	FetchingFileInfo,
	LocalFileInitialisation,
	DownloadStarted,
	DownloadProgress,
	DownloadFinish
}

export class FileDownloadProcess extends EventEmitter {
	public state: FileDownloadProcessState;

	constructor() {
		super();
	}

	emit(event: FileDownloadEvents, ...args: any[]): boolean {
		return super.emit(event, ...args);
	};

	on(event: FileDownloadEvents, listener: Function): this {
		return <this>super.on(event, listener);
	}
}