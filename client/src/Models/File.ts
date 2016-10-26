export type Status = 'Progress' | 'Finished' | 'Waiting' | 'Canceled';

export interface File{
	id: number;
	fileName: string;
	status: Status;
	speed: number;
	estimatedTime: string;
	progress: number;
	selected: boolean;
	accountId: number;
}