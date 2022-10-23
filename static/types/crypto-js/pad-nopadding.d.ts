declare module 'crypto-js/pad-nopadding' {
  import CryptoJS = require('crypto-js');

  export = CryptoJS.pad.NoPadding;
}
