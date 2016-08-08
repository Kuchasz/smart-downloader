var fs = require('fs');
var Rx = require('rxjs/Rx');

class Downloader {
  constructor(){
      this.fileNameTest = /\.dmd$/;
  }

  download(url, path, threads){

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
