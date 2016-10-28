import {UrlNotSupportedException} from "../Exceptions/UrlNotSupportedException";

const serviceProviders = [
  {
    regExp: /^http:\/\/.+/,
    service: require('http')
  },
  {
    regExp: /^https:\/\/.+/,
    service: require('https')
  }];

export const getDownloadService = (url) => {
    const serviceProvider = serviceProviders.find(s => s.regExp.test(url));
    if(!serviceProvider) throw new UrlNotSupportedException();
    return serviceProvider.service;
};
