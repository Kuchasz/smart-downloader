import {File} from './Entities/File';
import {readdir, statSync} from 'fs';
import {convertStatsToFile} from "./Services/FileStatsMapper";

export class Crawler {
    getFiles(path: string): Promise<File[]> {
        return new Promise((res, rej) => {
            readdir(path, (err, files)=> {
                if (err)rej(err);

                res(files.map(x => (
                    convertStatsToFile(x, statSync(`${path}/${x}`))
                )));

            });
        });
    }
}