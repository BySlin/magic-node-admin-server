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
    "headers": [
      {
        "description": "验证码缓存Key",
        "expression": "",
        "key": "captcha-key",
        "dataType": "String",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "e3da13a1e8b74647b0a84ca4cc5aae1f"
      },
      {
        "description": "验证码值",
        "expression": "",
        "key": "captcha-value",
        "dataType": "String",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "123"
      }
    ],
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
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"username\": \"admin\",\r\n  \"password\": \"123456\"\r\n}",
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
          "value": "108",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 22 Oct 2022 07:42:21 GMT",
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
              "key": "sec-ch-ua",
              "required": false,
              "validateType": 0,
              "value": "\"Chromium\";v=\"106\", \"Microsoft Edge\";v=\"106\", \"Not;A=Brand\";v=\"99\""
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "content-type",
              "required": false,
              "validateType": 0,
              "value": "application/json"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "sec-ch-ua-platform",
              "required": false,
              "validateType": 0,
              "value": "\"Windows\""
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "sec-fetch-dest",
              "required": false,
              "validateType": 0,
              "value": "empty"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "cookie",
              "required": false,
              "validateType": 0,
              "value": "locale=zh-cn; MW_SESS=eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJwZXJtaXNzaW9uIjoiZGV2ZWxvcGVyIn0sIl9leHBpcmUiOjE2NjY1MDkxMTg1MjAsIl9tYXhBZ2UiOjg2NDAwMDAwfQ==; MW_SESS.sig=O9AkHR5fIVQBWBUJ3NQnXMwvHXtMxocGxgFMdEP5e8E"
            },
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
          "value": "5"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"username\": \"admin\",\n    \"password\": \"123456\"\n  },\n  \"executeTime\": 5\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-22 15:42:22",
  "createdAt": "2022-10-22 15:22:17",
  "createdBy": "",
  "updatedBy": "",
  "id": "78c51101a4534e64b8f3c2f3689d944d"
}
================================*/
return body;