var fs = require('fs');
var Rx = require('rxjs/Rx');
const getDownloadService = require('./Services/DownloadServiceProvider');
const ObjectValidator = require('./Services/ObjectValidator');
const objectValidator = new ObjectValidator();

class Downloader {
  constructor(){
      this.fileNameTest = /\.dmd$/;
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
    return {};
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
      .mergeMap(fileNames => fileNames.map(fileName => Rx.Observable.of(fileName)))
      .filter(fileName => this.fileNameTest.test(fileName.value))
      .subscribe(fileName => console.log(fileName.value));
  }
}

module.exports = {
  Downloader
}
