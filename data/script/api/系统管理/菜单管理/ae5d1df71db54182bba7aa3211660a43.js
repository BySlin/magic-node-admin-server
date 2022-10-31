/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "详情",
  "path": "/detail",
  "description": "",
  "groupId": "1ba5cb19cc9c45f18bd64ef7b04fe876",
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
        "value": "744713751759945728"
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
          "value": "381",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Mon, 31 Oct 2022 13:06:40 GMT",
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
              "value": "744713751759945728"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "parentId",
              "required": false,
              "validateType": 0,
              "value": "744690820434624512"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "code",
              "required": false,
              "validateType": 0,
              "value": "system:menu"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "name",
              "required": false,
              "validateType": 0,
              "value": "菜单管理"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "path",
              "required": false,
              "validateType": 0,
              "value": "/system/menu"
            },
            {
              "children": [],
              "dataType": "Number",
              "description": "",
              "error": "",
              "expression": "",
              "key": "category",
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
              "key": "sort",
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
              "key": "isOpen",
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
              "value": "2022-10-24T12:13:17.000Z"
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
              "value": "2022-10-24T14:06:53.000Z"
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
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"id\": \"744713751759945728\",\n    \"parentId\": \"744690820434624512\",\n    \"code\": \"system:menu\",\n    \"name\": \"菜单管理\",\n    \"path\": \"/system/menu\",\n    \"category\": 1,\n    \"sort\": 0,\n    \"isOpen\": 0,\n    \"deleted\": 0,\n    \"createdBy\": \"743789983910854656\",\n    \"updatedBy\": \"743789983910854656\",\n    \"createdAt\": \"2022-10-24T12:13:17.000Z\",\n    \"updatedAt\": \"2022-10-24T14:06:53.000Z\"\n  },\n  \"executeTime\": 4\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-31 21:06:40",
  "createdAt": "2022-10-31 21:05:19",
  "createdBy": "",
  "updatedBy": "",
  "id": "ae5d1df71db54182bba7aa3211660a43"
}
================================*/
return await db.table("sys_menu").where().eq('id', query.id).selectOne();