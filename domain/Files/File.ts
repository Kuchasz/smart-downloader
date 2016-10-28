import {FileDownload} from "./FileDownload";

export interface File {
	id: number;
	name: string;
	download: FileDownload;
}