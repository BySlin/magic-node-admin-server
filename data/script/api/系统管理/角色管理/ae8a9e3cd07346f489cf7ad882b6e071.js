/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "详情",
  "path": "/detail",
  "description": "",
  "groupId": "5cf5939cb80f43ff90e954657fc50b93",
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
        "value": "748206733620412416"
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
          "value": "294",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Mon, 31 Oct 2022 13:08:02 GMT",
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
              "value": "748206733620412416"
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
              "value": "test"
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
              "value": "test"
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
              "dataType": "Number",
              "description": "",
              "error": "",
              "expression": "",
              "key": "sort",
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
              "value": "2022-10-29T07:53:13.000Z"
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
          "value": "3"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"id\": \"748206733620412416\",\n    \"tenantId\": \"000000\",\n    \"roleName\": \"test\",\n    \"roleAlias\": \"test\",\n    \"permission\": 0,\n    \"sort\": 1,\n    \"deleted\": 0,\n    \"createdBy\": \"743789983910854656\",\n    \"updatedBy\": null,\n    \"createdAt\": \"2022-10-29T07:53:13.000Z\",\n    \"updatedAt\": null\n  },\n  \"executeTime\": 3\n}",
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
  "updatedAt": "2022-11-01 17:38:02",
  "createdAt": "2022-10-31 21:06:59",
  "createdBy": "",
  "updatedBy": "",
  "id": "ae8a9e3cd07346f489cf7ad882b6e071"
}
================================*/
return await db.table("sys_role").logic().tenant().where().eq('id', query.id).selectOne();