const UrlNotSupportedException = require('../Exceptions/UrlNotSupportedException');

const serviceProviders = [
  {
    regExp: /^http:\/\/.+/,
    service: require('http')
  },
  {
    regExp: /^https:\/\/.+/,
    service: require('https')
  }];

const getDownloadService = (url) => {
    const serviceProvider = serviceProviders.find(s => s.regExp.test(url));
    if(!serviceProvider) throw new UrlNotSupportedException();
    return serviceProvider.service;
}

module.exports = getDownloadService;
