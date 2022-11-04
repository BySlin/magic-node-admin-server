/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "测试",
  "path": "/test",
  "description": "",
  "groupId": "890e1e52195040d0b3f8d05898d5c05e",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
    "paths": [],
    "headers": [],
    "responseBodyDefinition": {
      "responseType": "json",
      "headers": [
        {
          "key": "connection",
          "value": "keep-alive",
          "description": ""
        },
        {
          "key": "content-length",
          "value": "286",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 04 Nov 2022 13:26:31 GMT",
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
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
          "required": false,
          "validateType": 0,
          "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Mzc4OTk4MzkxMDg1NDY1NiIsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IjAwMDAwMCIsImlhdCI6MTY2NzU2ODI3MiwiZXhwIjoxNjY3NjU0NjcyfQ.SgagtmqG5uvhT8qGsU9se9f_l0E99bPSfbFD8qlbOBA"
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
          "value": "71"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Mzc4OTk4MzkxMDg1NDY1NiIsInVzZXJuYW1lIjoiYWRtaW4iLCJ0ZW5hbnRJZCI6IjAwMDAwMCIsImlhdCI6MTY2NzU2ODI3MiwiZXhwIjoxNjY3NjU0NjcyfQ.SgagtmqG5uvhT8qGsU9se9f_l0E99bPSfbFD8qlbOBA\",\n  \"executeTime\": 71\n}",
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
  "updatedAt": "2022-11-04 21:27:03",
  "createdAt": "2022-10-22 16:43:16",
  "createdBy": "",
  "updatedBy": "",
  "id": "4aa766d07717482583b1ea17afc28d6d"
}
================================*/
const crypto = require('crypto-js');

const passwordEncoder = await importModule('passwordEncoder');
const password = passwordEncoder.encrypt("E10ADC3949BA59ABBE56E057F20F883E");

// db.table('sys_user').primary("id").save({
//   username: "admin",
//   password
// });

//E10ADC3949BA59ABBE56E057F20F883E
return password;