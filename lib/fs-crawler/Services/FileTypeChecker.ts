import {FileType} from "../Entities/FileType";
import {stat} from "fs";
import {getFileType} from "./FileTypeAccessor";
import {statSync} from "fs";

export const checkFileTypeAsync = (path: string): Promise<FileType> => (
    new Promise<FileType>((res, rej)=> {
        stat(path, (err, stats)=> {
            err && rej();
            res(getFileType(stats));
        });
    }));

export const checkFileType = (path: string): FileType => getFileType(statSync(path));