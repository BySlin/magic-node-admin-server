/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "修改密码",
  "path": "/update/password",
  "description": "",
  "groupId": "54d7b65487a3419c8cad96b4e7120d46",
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
          "key": "id",
          "required": true,
          "validateType": 0,
          "value": "752520938813128704"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "password",
          "required": true,
          "validateType": 0,
          "value": "E10ADC3949BA59ABBE56E057F20F883E"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "newPassword",
          "required": true,
          "validateType": 0,
          "value": "E10ADC3949BA59ABBE56E057F20F883E"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"id\": \"752520938813128704\",\r\n  \"password\": \"E10ADC3949BA59ABBE56E057F20F883E\",\r\n  \"newPassword\": \"E10ADC3949BA59ABBE56E057F20F883E\"\r\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    },
    "responseBodyDefinition": {
      "responseType": "json",
      "headers": [
        {
          "key": "access-control-allow-credentials",
          "value": "true",
          "description": ""
        },
        {
          "key": "access-control-allow-origin",
          "value": "http://127.0.0.1:7001",
          "description": ""
        },
        {
          "key": "access-control-expose-headers",
          "value": "Authorization, Content-Disposition, Date",
          "description": ""
        },
        {
          "key": "connection",
          "value": "keep-alive",
          "description": ""
        },
        {
          "key": "content-length",
          "value": "71",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 04 Nov 2022 09:01:19 GMT",
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
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
          "required": false,
          "validateType": 0,
          "value": "1"
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
          "value": "153"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": 1,\n  \"executeTime\": 153\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-04 17:01:27",
  "createdAt": "2022-11-04 16:54:32",
  "createdBy": "",
  "updatedBy": "",
  "id": "2538e89065a8467bbd3f175e92ffbbbc"
}
================================*/
//密码加密比较模块
const passwordEncoder = await importModule('passwordEncoder');

const oldUser = await db.table('sys_user').where().eq('id', body.id).selectOne();

if (!passwordEncoder.decrypt(body.password, oldUser.password)) {
  exit(400, '原密码错误');
}
return await db.table('sys_user').logic().tenant().column('password', passwordEncoder.encrypt(body.newPassword)).where().eq('id', body.id).update();