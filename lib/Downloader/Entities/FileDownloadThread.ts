import {EventEmitter} from "events";
import {FileDownloadThreadEvent} from "../Events/FileDownloadThreadEvents";

export class FileDownloadThread extends EventEmitter {
	constructor(public start: number, public end: number, public fd: number) {
		super();
	}

	emit(event: FileDownloadThreadEvent, ...args: any[]): boolean {
		return super.emit(event, ...args);
	};

	on(event: FileDownloadThreadEvent, listener: Function): this {
		return <this>super.on(event, listener);
	}
}