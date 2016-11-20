import {File} from "../../../domain/Files/File";

export interface IFileRepository{
	getAll(): File[];
    get(id: number): File;
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

	get(id: number){
        return this.files.filter(f => f.id === id)[0];
    }
}

const FileRepository: IFileRepository = new MemoryFileRepository();
export default FileRepository;