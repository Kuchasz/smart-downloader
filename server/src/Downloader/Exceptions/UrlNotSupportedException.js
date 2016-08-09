const defaultMessage = 'Not supported kind of url';

class UrlNotSupportedException extends Error {
  constructor(message){
      super(message | defaultMessage);
  }
}

module.exports = UrlNotSupportedException;
