import {Stats} from 'fs';
export class FileInfo extends Stats{
    constructor(public path: string, stats: Stats){
        Object.assign(this, stats);
    }
}