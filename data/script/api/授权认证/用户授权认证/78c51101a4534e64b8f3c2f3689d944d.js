/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "登录用户验证",
  "path": "/token",
  "description": "",
  "groupId": "4dac464312424adca284b3b36bceaafd",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
    "paths": [],
    "headers": [],
    "requestBodyDefinition": {
      "requestType": "json",
      "children": [
        {
          "children": [],
          "dataType": "String",
          "description": "账号",
          "error": "",
          "expression": "",
          "key": "username",
          "required": true,
          "validateType": 0,
          "value": "admin"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "密码",
          "error": "",
          "expression": "",
          "key": "password",
          "required": true,
          "validateType": 0,
          "value": "123456"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "验证码Key",
          "error": "",
          "expression": "",
          "key": "captchaKey",
          "required": true,
          "validateType": 0,
          "value": "e3da13a1e8b74647b0a84ca4cc5aae1f"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "验证码Value",
          "error": "",
          "expression": "",
          "key": "captchaValue",
          "required": true,
          "validateType": 0,
          "value": "1234"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"username\": \"admin\",\r\n  \"password\": \"123456\",\r\n  \"captchaKey\": \"e3da13a1e8b74647b0a84ca4cc5aae1f\",\r\n  \"captchaValue\": \"1234\"\r\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    },
    "responseBodyDefinition": {
      "responseType": "json",
      "headers": [
        {
          "key": "content-length",
          "value": "57",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 22 Oct 2022 15:46:40 GMT",
          "description": ""
        }
      ],
      "children": [
        {
          "children": [],
          "dataType": "Boolean",
          "description": "",
          "error": "",
          "expression": "",
          "key": "success",
          "required": false,
          "validateType": 0,
          "value": "false"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "code",
          "required": false,
          "validateType": 0,
          "value": "-1"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "message",
          "required": false,
          "validateType": 0,
          "value": "验证码错误"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"success\": false,\n  \"code\": \"-1\",\n  \"message\": \"验证码错误\"\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-22 23:49:11",
  "createdAt": "2022-10-22 15:22:17",
  "createdBy": "",
  "updatedBy": "",
  "id": "78c51101a4534e64b8f3c2f3689d944d"
}
================================*/
const assert = require('assert');

const captchaValue = cache.get("captcha:" + body.captchaKey);

assert(captchaValue === body.captchaValue.toLowerCase(), "验证码错误");

return body;