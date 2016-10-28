import {File} from "../../../domain/Files/File";

export interface IFileRepository{
	getAll(): File[];
	save(file: File): void;
}

export class MemoryFileRepository implements IFileRepository{
	files: File[];

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