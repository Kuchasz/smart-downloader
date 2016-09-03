import {ObjectValidator} from "./Services/ObjectValidator";
import * as fs from 'fs';
import * as Rx from 'rxjs/Rx';
import { getDownloadService } from './Services/DownloadServiceProvider';
const objectValidator = new ObjectValidator();

export class Downloader {
  constructor(public fileNameTest = /\.dmd$/){
  }

  //targetPath, fileUrl, numberOfThreads
  createMetaFile(){
  }

  //meta
  downloadFromMetaFile(){
  }

  //{} with url or filePath
  getFileInfo(urlObject){
    console.log(objectValidator.checkExclusiveProperties(urlObject, 'url', 'filePath'));
    return getDownloadService(urlObject);
  }

  //fileUrl
  getFileSize(){
  }

  //targetPath, fileUrl, numberOfThreads
  //metaFilePath
  download(){
  }

  //download
  downloadStart(){
  }

  //download
  downloadProgress(){
  }

  //download
  downloadEnded(){
  }

  list(path){
    Rx.Observable.bindNodeCallback(fs.readdir)(path)
      // .mergeMap(fileNames => (fileNames.map(fileName => Rx.Observable.of(fileName))))
      // .filter(fileName => this.fileNameTest.test(fileName))
      .subscribe(fileName => console.log(fileName));
  }
}
