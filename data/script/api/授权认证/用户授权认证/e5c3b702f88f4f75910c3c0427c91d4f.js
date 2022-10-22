/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "验证码",
  "path": "/captcha",
  "description": "",
  "groupId": "4dac464312424adca284b3b36bceaafd",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
    "paths": [],
    "headers": [],
    "responseBodyDefinition": {
      "responseType": "image",
      "headers": [
        {
          "key": "captcha-key",
          "value": "748fe714bfd2466c82dab1a56dec89df",
          "description": "验证码Key"
        },
        {
          "key": "connection",
          "value": "keep-alive",
          "description": ""
        },
        {
          "key": "content-length",
          "value": "8327",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "image/svg+xml",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 22 Oct 2022 09:47:33 GMT",
          "description": ""
        },
        {
          "key": "keep-alive",
          "value": "timeout=5",
          "description": ""
        },
        {
          "key": "vary",
          "value": "Origin",
          "description": ""
        },
        {
          "key": "x-frame-options",
          "value": "SAMEORIGIN",
          "description": ""
        },
        {
          "key": "x-xss-protection",
          "value": "1; mode=block",
          "description": ""
        }
      ],
      "children": [],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    },
    "requestBodyDefinition": {
      "requestType": "json",
      "children": [],
      "dataType": "",
      "description": "",
      "error": "",
      "expression": "",
      "json": "",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-22 17:47:33",
  "createdAt": "2022-10-22 15:20:48",
  "createdBy": "",
  "updatedBy": "",
  "id": "e5c3b702f88f4f75910c3c0427c91d4f"
}
================================*/
const response = await importModule('response');

const svgCaptcha = require('svg-captcha');

const captchaKey = uuid();

const { data, text } = svgCaptcha.create({
  background: "#FFFFFF",
  noise: 2
});

ctx.set({
  "captcha-key": captchaKey
});

cache.set("captcha:" + captchaKey, text, 1800);

return response.image(data, 'image/svg+xml');