import {FileDownload} from "./FileDownload";

export interface File {
	id: number;
	name: string;
	length: number;
	download: FileDownload;
}