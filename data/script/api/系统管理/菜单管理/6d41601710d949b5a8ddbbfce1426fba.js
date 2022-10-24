/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "获取菜单tree",
  "path": "/tree",
  "description": "",
  "groupId": "1ba5cb19cc9c45f18bd64ef7b04fe876",
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
          "value": "654",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Mon, 24 Oct 2022 12:31:53 GMT",
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
                  "value": "744690820434624512"
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
                  "value": "0"
                },
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "permissionCode",
                  "required": false,
                  "validateType": 0,
                  "value": "system"
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
                  "value": "系统管理"
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
                  "value": "/system"
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
                  "value": "2022-10-24T11:27:43.000Z"
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
                  "value": "2022-10-24T11:36:11.000Z"
                },
                {
                  "children": [],
                  "dataType": "Object",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "children",
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
          "value": "19"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": [\n    {\n      \"id\": \"744690820434624512\",\n      \"parentId\": \"0\",\n      \"permissionCode\": \"system\",\n      \"name\": \"系统管理\",\n      \"path\": \"/system\",\n      \"category\": 1,\n      \"sort\": 0,\n      \"isOpen\": 0,\n      \"deleted\": 0,\n      \"createdBy\": null,\n      \"updatedBy\": null,\n      \"createdAt\": \"2022-10-24T11:27:43.000Z\",\n      \"updatedAt\": \"2022-10-24T11:36:11.000Z\",\n      \"children\": [\n        {\n          \"id\": \"744713751759945728\",\n          \"parentId\": \"744690820434624512\",\n          \"permissionCode\": \"system:menu\",\n          \"name\": \"系统管理\",\n          \"path\": \"/system/menu\",\n          \"category\": 1,\n          \"sort\": 0,\n          \"isOpen\": 0,\n          \"deleted\": 0,\n          \"createdBy\": null,\n          \"updatedBy\": null,\n          \"createdAt\": \"2022-10-24T12:13:17.000Z\",\n          \"updatedAt\": \"2022-10-24T12:13:27.000Z\",\n          \"children\": []\n        }\n      ]\n    }\n  ],\n  \"executeTime\": 19\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-24 20:31:53",
  "createdAt": "2022-10-24 19:48:18",
  "createdBy": "",
  "updatedBy": "",
  "id": "6d41601710d949b5a8ddbbfce1426fba"
}
================================*/
const toTree = await importFunction('/utils/tree/arrToTree');
return toTree(await db.table('sys_menu').logic().orderBy('sort').select(), '0');