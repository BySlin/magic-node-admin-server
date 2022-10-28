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
    "options": [
      {
        "description": "允许拥有该权限的访问",
        "value": "system:menu:read",
        "key": "permission"
      }
    ],
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
          "value": "1313",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 28 Oct 2022 17:54:13 GMT",
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
                  "dataType": "String",
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
                  "dataType": "String",
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
                  "dataType": "Array",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "children",
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
                  "key": "code",
                  "required": false,
                  "validateType": 0,
                  "value": "system"
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
          "value": "10"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": [\n    {\n      \"id\": \"744690820434624512\",\n      \"parentId\": \"0\",\n      \"code\": \"system\",\n      \"name\": \"系统管理\",\n      \"path\": \"/system\",\n      \"category\": 1,\n      \"sort\": 0,\n      \"isOpen\": 0,\n      \"deleted\": 0,\n      \"createdBy\": \"743789983910854656\",\n      \"updatedBy\": \"743789983910854656\",\n      \"createdAt\": \"2022-10-24T11:27:43.000Z\",\n      \"updatedAt\": \"2022-10-24T14:17:08.000Z\",\n      \"children\": [\n        {\n          \"id\": \"744713751759945728\",\n          \"parentId\": \"744690820434624512\",\n          \"code\": \"system:menu\",\n          \"name\": \"菜单管理\",\n          \"path\": \"/system/menu\",\n          \"category\": 1,\n          \"sort\": 0,\n          \"isOpen\": 0,\n          \"deleted\": 0,\n          \"createdBy\": \"743789983910854656\",\n          \"updatedBy\": \"743789983910854656\",\n          \"createdAt\": \"2022-10-24T12:13:17.000Z\",\n          \"updatedAt\": \"2022-10-24T14:06:53.000Z\",\n          \"children\": [\n            {\n              \"id\": \"744758062442610688\",\n              \"parentId\": \"744713751759945728\",\n              \"code\": \"system:menu:add\",\n              \"name\": \"新增\",\n              \"path\": null,\n              \"category\": 2,\n              \"sort\": 1,\n              \"isOpen\": 0,\n              \"deleted\": 0,\n              \"createdBy\": \"743789983910854656\",\n              \"updatedBy\": \"743789983910854656\",\n              \"createdAt\": \"2022-10-24T13:41:19.000Z\",\n              \"updatedAt\": \"2022-10-24T14:10:28.000Z\"\n            }\n          ]\n        },\n        {\n          \"id\": \"744756041593389056\",\n          \"parentId\": \"744690820434624512\",\n          \"code\": \"system:role\",\n          \"name\": \"角色管理\",\n          \"path\": \"/system/role\",\n          \"category\": 1,\n          \"sort\": 1,\n          \"isOpen\": 0,\n          \"deleted\": 0,\n          \"createdBy\": \"743789983910854656\",\n          \"updatedBy\": \"743789983910854656\",\n          \"createdAt\": \"2022-10-24T13:37:18.000Z\",\n          \"updatedAt\": \"2022-10-24T14:06:51.000Z\"\n        }\n      ]\n    }\n  ],\n  \"executeTime\": 10\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-29 02:00:26",
  "createdAt": "2022-10-24 19:48:18",
  "createdBy": "",
  "updatedBy": "",
  "id": "6d41601710d949b5a8ddbbfce1426fba"
}
================================*/
const toTree = async (parentId) => {
  const list = await db.table('sys_menu').logic().where().eq('parentId', parentId).orderBy('sort').select();
  for (const data of list) {
    const children = await toTree(data.id);
    if (children.length > 0) {
      data.children = children;
    }
  }
  return list;
}
return await toTree("0");