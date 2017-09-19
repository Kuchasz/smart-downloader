import {FileDownloadState} from "../../../domain/Files/FileDownload";
export function formatDownloadSpeed(bytesPerSecond: number, state: FileDownloadState) {
	if (state !== FileDownloadState.Progress)return '---';
	if (1024 > bytesPerSecond)return `${bytesPerSecond.toFixed(2)}B/s`;
	if ((1024 * 1024 > bytesPerSecond) && (bytesPerSecond > 1024)) return `${(bytesPerSecond / 1024).toFixed(2)}KB/s`;
	if ((1024 * 1024 * 1024 > bytesPerSecond) && (bytesPerSecond > 1024 * 1024)) return `${(bytesPerSecond / 1024 / 1024).toFixed(2)}MB/s`;
	return '';
}

export function formatFileDownloadStateToString(state: FileDownloadState) {
	return FileDownloadState[state];
}