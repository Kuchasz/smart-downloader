import {EventEmitter} from "events";
import {FileDownloadEvents} from "../Events/FileDownloadEvents";

export class FileDownloadThread extends EventEmitter {
	constructor(public start: number, public end: number, public fd: number) {
		super();
	}

	emit(event: FileDownloadEvents, ...args: any[]): boolean {
		return super.emit(event, ...args);
	};

	on(event: FileDownloadEvents, listener: Function): this {
		return <this>super.on(event, listener);
	}
}