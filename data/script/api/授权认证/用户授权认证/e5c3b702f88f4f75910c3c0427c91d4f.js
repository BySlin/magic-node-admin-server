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
          "value": "83ec49ab59ba457f94c7711c6151f073",
          "description": "验证码Key"
        },
        {
          "key": "content-length",
          "value": "9092",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "image/svg+xml",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 22 Oct 2022 07:42:24 GMT",
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
  "updatedAt": "2022-10-22 15:42:24",
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