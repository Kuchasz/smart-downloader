import {EventEmitter} from "events";

export type FileDownloadProcessEvent =
	'FetchingFileInfo'
		| 'LocalFileInitialisation'
			|	'DownloadStarted'
				|	'DownloadProgress'
					|	'DownloadFinish';

export class FileDownloadProcess extends EventEmitter {
	constructor() {
		super();
	}

	emit(event: FileDownloadProcessEvent, ...args: any[]): boolean {
		return super.emit(event, ...args);
	};

	on(event: FileDownloadProcessEvent, listener: Function): this {
		return <this>super.on(event, listener);
	}
}