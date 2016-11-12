import {File} from './Entities/File';
import {readdir, statSync} from 'fs';
import {join} from 'path';
import {convertStatsToFile} from "./Services/FileStatsConverter";
import {checkFileTypeAsync} from "./Services/FileTypeChecker";
import {FileType} from "./Entities/FileType";

export class Crawler {
    getFiles(path: string): Promise<File[]> {
        return new Promise((res, rej) => {
            checkFileTypeAsync(path).then(x => {
                x == FileType.Directory && readdir(path, (err, files) => {
                    if (err)rej(err);
                    const _fullFilePath = (fileName: string) => (join(path, fileName));
                    res(files.map(x => (
                        convertStatsToFile(_fullFilePath(x), statSync(_fullFilePath(x)))
                    )));
                });
            });
        });
    }
}