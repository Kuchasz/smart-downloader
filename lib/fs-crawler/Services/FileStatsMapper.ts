import {Stats} from 'fs';
import {basename} from 'path';
import {File} from '../Entities/File'
import {FileType} from "../Entities/FileType";

export const convertStatsToFile = (path: string, stats: Stats): File => ({
    name: basename(path),
    path,
    type: stats.isFile() ? FileType.File : stats.isDirectory() ? FileType.Directory : stats.isSymbolicLink() ? FileType.SymbolicLink : FileType.Other,
});