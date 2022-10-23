declare module 'crypto-js/format-openssl' {
  import CryptoJS = require('crypto-js');

  export = CryptoJS.format.OpenSSL;
}
