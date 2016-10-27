import {File} from "../../../domain/Files/File";
export interface IFileRepository{
	getAll(): File;
}