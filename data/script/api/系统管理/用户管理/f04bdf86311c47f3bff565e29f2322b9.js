/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "详情",
  "path": "/detail",
  "description": "",
  "groupId": "54d7b65487a3419c8cad96b4e7120d46",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [
      {
        "description": "",
        "expression": "",
        "key": "id",
        "dataType": "String",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "743789983910854656"
      }
    ],
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
          "value": "308",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Thu, 03 Nov 2022 13:27:01 GMT",
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
          "children": [
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "id",
              "required": false,
              "validateType": 0,
              "value": "743789983910854656"
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
            },
            {
              "children": [],
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "realname",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "nickname",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "avator",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "deptId",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "tenantId",
              "required": false,
              "validateType": 0,
              "value": "000000"
            },
            {
              "children": [],
              "dataType": "Number",
              "description": "",
              "error": "",
              "expression": "",
              "key": "enabled",
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
              "key": "deleted",
              "required": false,
              "validateType": 0,
              "value": "0"
            },
            {
              "children": [],
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "createdBy",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "updatedBy",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "createdAt",
              "required": false,
              "validateType": 0,
              "value": "2022-10-23T05:37:55.000Z"
            },
            {
              "children": [],
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "updatedAt",
              "required": false,
              "validateType": 0,
              "value": ""
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
          "value": "6"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"id\": \"743789983910854656\",\n    \"username\": \"admin\",\n    \"realname\": null,\n    \"nickname\": null,\n    \"avator\": null,\n    \"deptId\": null,\n    \"tenantId\": \"000000\",\n    \"enabled\": 1,\n    \"deleted\": 0,\n    \"createdBy\": null,\n    \"updatedBy\": null,\n    \"createdAt\": \"2022-10-23T05:37:55.000Z\",\n    \"updatedAt\": null\n  },\n  \"executeTime\": 6\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-03 21:27:08",
  "createdAt": "2022-11-03 20:02:57",
  "createdBy": "",
  "updatedBy": "",
  "id": "f04bdf86311c47f3bff565e29f2322b9"
}
================================*/
return await db.table("sys_user").excludes('password').logic().tenant().where().eq('id', query.id).selectOne();