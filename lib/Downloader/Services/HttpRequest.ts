import {UrlNotSupportedException} from "../Exceptions/UrlNotSupportedException";
import {ClientRequest, request as httpRequest} from 'http';
import {request as httpsRequest} from 'https';

const requestProviders = [
  {
    regExp: /^http:\/\/.+/,
    request: httpRequest
  },
  {
    regExp: /^https:\/\/.+/,
    request: httpsRequest
  }];

export const request = (url: string): ClientRequest  => {
    const serviceProvider = requestProviders.find(s => s.regExp.test(url));
    if(!serviceProvider) throw new UrlNotSupportedException();
    return serviceProvider.request(url);
};
