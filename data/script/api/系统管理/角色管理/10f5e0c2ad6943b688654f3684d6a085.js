/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "下拉数据源",
  "path": "/select",
  "description": "",
  "groupId": "5cf5939cb80f43ff90e954657fc50b93",
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
          "value": "558",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 04 Nov 2022 06:30:15 GMT",
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
                  "value": "1123598816738675201"
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
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "roleName",
                  "required": false,
                  "validateType": 0,
                  "value": "超级管理员"
                },
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "roleAlias",
                  "required": false,
                  "validateType": 0,
                  "value": "SUPER_ADMIN"
                },
                {
                  "children": [],
                  "dataType": "Number",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "permission",
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
                  "key": "remark",
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
                  "dataType": "Object",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "createdAt",
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
              "key": "-",
              "required": false,
              "validateType": 0,
              "value": ""
            }
          ],
          "dataType": "Array",
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
          "value": "2"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": [\n    {\n      \"id\": \"1123598816738675201\",\n      \"tenantId\": \"000000\",\n      \"roleName\": \"超级管理员\",\n      \"roleAlias\": \"SUPER_ADMIN\",\n      \"permission\": 0,\n      \"remark\": null,\n      \"deleted\": 0,\n      \"createdBy\": null,\n      \"updatedBy\": null,\n      \"createdAt\": null,\n      \"updatedAt\": null\n    },\n    {\n      \"id\": \"748206733620412416\",\n      \"tenantId\": \"000000\",\n      \"roleName\": \"管理员\",\n      \"roleAlias\": \"admin\",\n      \"permission\": 0,\n      \"remark\": null,\n      \"deleted\": 0,\n      \"createdBy\": \"743789983910854656\",\n      \"updatedBy\": \"743789983910854656\",\n      \"createdAt\": \"2022-10-29T07:53:13.000Z\",\n      \"updatedAt\": \"2022-11-01T11:36:18.000Z\"\n    }\n  ],\n  \"executeTime\": 2\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-04 14:30:15",
  "createdAt": "2022-10-29 15:53:57",
  "createdBy": "",
  "updatedBy": "",
  "id": "10f5e0c2ad6943b688654f3684d6a085"
}
================================*/
return await db.table('sys_role')
  .logic()
  .tenant()
  .orderBy('createdAt')
  .select();