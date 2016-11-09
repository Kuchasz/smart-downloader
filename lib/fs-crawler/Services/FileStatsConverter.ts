import {Stats} from 'fs';
import {basename} from 'path';
import {File} from '../Entities/File'
import {getFileType} from "./FileTypeAccessor";

export const convertStatsToFile = (path: string, stats: Stats): File => ({
    name: basename(path),
    path,
    type: getFileType(stats)
});