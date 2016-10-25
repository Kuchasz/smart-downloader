export enum FileDownloadState {
	Waiting,
	Progress,
	Ended,
	Error,
	Paused,
	Stopped,
	Init
}

export interface FileDownload {
	fileId: number;
	speed: number;
	progress: number;
	state: FileDownloadState;
}