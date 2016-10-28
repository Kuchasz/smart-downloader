const defaultMessage = 'Not supported kind of url';

export class UrlNotSupportedException extends Error {
  constructor(public message = defaultMessage){
      super(message);
  }
}
