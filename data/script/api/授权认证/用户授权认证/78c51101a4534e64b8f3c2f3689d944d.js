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
          "description": "",
          "error": "",
          "expression": "",
          "key": "username",
          "required": false,
          "validateType": 0,
          "value": "admin"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "password",
          "required": false,
          "validateType": 0,
          "value": "123456"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "captchaKey",
          "required": false,
          "validateType": 0,
          "value": "e3da13a1e8b74647b0a84ca4cc5aae1f"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "captchaValue",
          "required": false,
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
          "value": "178",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 22 Oct 2022 17:34:18 GMT",
          "description": ""
        }
      ],
      "children": [
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "code",
          "required": false,
          "validateType": 0,
          "value": "200"
        },
        {
          "children": [],
          "dataType": "Boolean",
          "description": "",
          "error": "",
          "expression": "",
          "key": "success",
          "required": false,
          "validateType": 0,
          "value": "true"
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
          "value": "OK"
        },
        {
          "children": [
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "username",
              "required": false,
              "validateType": 0,
              "value": "admin"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "password",
              "required": false,
              "validateType": 0,
              "value": "123456"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "captchaKey",
              "required": false,
              "validateType": 0,
              "value": "e3da13a1e8b74647b0a84ca4cc5aae1f"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "captchaValue",
              "required": false,
              "validateType": 0,
              "value": "1234"
            }
          ],
          "dataType": "Object",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
          "required": false,
          "validateType": 0,
          "value": ""
        },
        {
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "executeTime",
          "required": false,
          "validateType": 0,
          "value": "4"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"username\": \"admin\",\n    \"password\": \"123456\",\n    \"captchaKey\": \"e3da13a1e8b74647b0a84ca4cc5aae1f\",\n    \"captchaValue\": \"1234\"\n  },\n  \"executeTime\": 4\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-23 01:37:03",
  "createdAt": "2022-10-22 15:22:17",
  "createdBy": "",
  "updatedBy": "",
  "id": "78c51101a4534e64b8f3c2f3689d944d"
}
================================*/
const assert = require('assert');

const captchaValue = await cache.get("captcha:" + body.captchaKey);

assert(captchaValue === body.captchaValue.toLowerCase(), "验证码错误");

return body;