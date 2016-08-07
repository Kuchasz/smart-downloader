class DownloadThread {
  constructor(start, end, fd){
    this.start = start;
    this.end = end;
    this.fd = fd;
  }
}

module.exports = {
  DownloadThread
}
