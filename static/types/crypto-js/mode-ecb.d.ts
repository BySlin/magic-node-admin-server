declare module 'crypto-js/mode-ecb' {
  import CryptoJS = require('crypto-js');

  export = CryptoJS.mode.ECB;
}
