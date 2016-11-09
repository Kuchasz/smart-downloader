import {Stats} from "fs";
import {FileType} from "../Entities/FileType";
export const getFileType = (stats: Stats): FileType => {
    return stats.isSymbolicLink() ? FileType.SymbolicLink :
        stats.isFile() ? FileType.File :
            stats.isDirectory() ? FileType.Directory :
                stats.isBlockDevice() ? FileType.BlockDevice :
                    stats.isCharacterDevice() ? FileType.CharacterDevice :
                        stats.isFIFO() ? FileType.FIFO :
                            stats.isSocket() ? FileType.Socket :
                                FileType.Other;
};