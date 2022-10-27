/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "列表查询",
  "path": "/list",
  "description": "",
  "groupId": "65c03aa6484843d9b029878255a136b8",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [
      {
        "description": "",
        "expression": "",
        "key": "current",
        "dataType": "Number",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "0"
      },
      {
        "description": "",
        "expression": "",
        "key": "pageSize",
        "dataType": "Number",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "10"
      },
      {
        "description": "",
        "expression": "",
        "key": "tenantId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "tenantName",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ],
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
          "value": "254",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Thu, 27 Oct 2022 11:40:12 GMT",
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
              "dataType": "Number",
              "description": "",
              "error": "",
              "expression": "",
              "key": "total",
              "required": false,
              "validateType": 0,
              "value": "1"
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
                      "value": "1123598820738675201"
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
                      "key": "tenantName",
                      "required": false,
                      "validateType": 0,
                      "value": "管理组"
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
              "key": "list",
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
          "value": "5"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"total\": 1,\n    \"list\": [\n      {\n        \"id\": \"1123598820738675201\",\n        \"tenantId\": \"000000\",\n        \"tenantName\": \"管理组\",\n        \"enabled\": 1,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": null,\n        \"createdAt\": null,\n        \"updatedAt\": null\n      }\n    ]\n  },\n  \"executeTime\": 5\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-27 19:40:12",
  "createdAt": "2022-10-27 19:29:35",
  "createdBy": "",
  "updatedBy": "",
  "id": "653a48dc8a6049e5a016637c62d345fd"
}
================================*/
return await db.table('sys_tenant')
  .logic()
  .where()
  .like(not_blank(query.tenantId), 'tenantId', `%${query.tenantId}%`)
  .like(not_blank(query.tenantName), 'tenantName', `%${query.tenantName}%`)
  .orderByDesc('createdAt')
  .page(query.pageSize, query.current);