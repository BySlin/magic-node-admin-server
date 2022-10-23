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
          "key": "content-length",
          "value": "139",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sun, 23 Oct 2022 07:11:43 GMT",
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
          "value": "{bcrypt}$2a$10$d79uZf3HFNOhjA4oQC9Cme1YF1Vle90L4DvKtKRkIMWjS2WrUxt2G"
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
          "value": "62"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": \"{bcrypt}$2a$10$d79uZf3HFNOhjA4oQC9Cme1YF1Vle90L4DvKtKRkIMWjS2WrUxt2G\",\n  \"executeTime\": 62\n}",
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
  "updatedAt": "2022-10-23 15:11:43",
  "createdAt": "2022-10-22 16:43:16",
  "createdBy": "",
  "updatedBy": "",
  "id": "4aa766d07717482583b1ea17afc28d6d"
}
================================*/
const crypto = require('crypto-js');

const passwordEncoder = await importModule('passwordEncoder');
const password = passwordEncoder.encrypt("E10ADC3949BA59ABBE56E057F20F883E");

db.table('sys_user').primary("id").save({
  username: "admin",
  password
});

//E10ADC3949BA59ABBE56E057F20F883E
return password;