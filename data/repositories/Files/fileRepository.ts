import {File} from "../../../domain/Files/File";

export interface IFileRepository{
	getAll(): File[];
	save(file: File): void;
}

class MemoryFileRepository implements IFileRepository{
	private files: File[];

	constructor(){
		this.files = [];
	}

	save(file: File): void {
		this.files.push(file);
	}

	getAll(): File[] {
		return this.files;
	}
}

export const fileRepository: IFileRepository = new MemoryFileRepository();