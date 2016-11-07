import {File} from './Entities/File';
import {readdir} from 'fs';
import {basename} from 'path';
import {FileType} from "./Entities/FileType";

export class Crawler {
    getFiles(path: string): Promise<File[]> {
        return new Promise((res, rej) => {
            readdir(path, (err, files)=> {
                if (err)rej(err);
                res(files.map(x => ({
                    name: basename(x),
                    path: x,
                    type: FileType.File
                })));
            });
        });
    }
}