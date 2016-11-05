import {UrlNotSupportedException} from "../Exceptions/UrlNotSupportedException";
import * as _http from 'http';
import * as _https from 'https';
import {ClientRequest} from "http";

const serviceProviders = [
  {
    regExp: /^http:\/\/.+/,
    service: _http
  },
  {
    regExp: /^https:\/\/.+/,
    service: _https
  }];

export const getDownloadService = (url): ClientRequest  => {
    const serviceProvider = serviceProviders.find(s => s.regExp.test(url));
    if(!serviceProvider) throw new UrlNotSupportedException();
    return serviceProvider.service.request(url);
};
