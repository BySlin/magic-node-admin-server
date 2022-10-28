/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "下拉数据源",
  "path": "/select",
  "description": "",
  "groupId": "65c03aa6484843d9b029878255a136b8",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
    "paths": [],
    "headers": [],
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
    },
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
          "value": "711",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 28 Oct 2022 19:13:26 GMT",
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
                  "value": "746878914181201920"
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
                  "value": "111111"
                },
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "tenantName",
                  "required": false,
                  "validateType": 0,
                  "value": "111111"
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
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "createdBy",
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
                  "key": "updatedBy",
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
                  "key": "createdAt",
                  "required": false,
                  "validateType": 0,
                  "value": "2022-10-27T11:55:04.000Z"
                },
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "updatedAt",
                  "required": false,
                  "validateType": 0,
                  "value": "2022-10-27T11:55:11.000Z"
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
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": [\n    {\n      \"id\": \"746878914181201920\",\n      \"tenantId\": \"111111\",\n      \"tenantName\": \"111111\",\n      \"enabled\": 1,\n      \"deleted\": 0,\n      \"createdBy\": \"743789983910854656\",\n      \"updatedBy\": \"743789983910854656\",\n      \"createdAt\": \"2022-10-27T11:55:04.000Z\",\n      \"updatedAt\": \"2022-10-27T11:55:11.000Z\"\n    },\n    {\n      \"id\": \"746871487847202816\",\n      \"tenantId\": \"123456\",\n      \"tenantName\": \"测试\",\n      \"enabled\": 1,\n      \"deleted\": 0,\n      \"createdBy\": \"743789983910854656\",\n      \"updatedBy\": null,\n      \"createdAt\": \"2022-10-27T11:40:19.000Z\",\n      \"updatedAt\": null\n    },\n    {\n      \"id\": \"1123598820738675201\",\n      \"tenantId\": \"000000\",\n      \"tenantName\": \"管理组\",\n      \"enabled\": 1,\n      \"deleted\": 0,\n      \"createdBy\": \"743789983910854656\",\n      \"updatedBy\": null,\n      \"createdAt\": \"2022-10-26T11:40:54.000Z\",\n      \"updatedAt\": null\n    }\n  ],\n  \"executeTime\": 2\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-29 03:13:26",
  "createdAt": "2022-10-29 03:10:21",
  "createdBy": "",
  "updatedBy": "",
  "id": "2037e3c64e444b82bcb7a12940cd4783"
}
================================*/
const table = db.table('sys_tenant');

if (ctx.user.tenantId !== '000000') {
  table.tenant();
}

return await table
  .logic()
  .where()
  .orderByDesc('createdAt')
  .select();