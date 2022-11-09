/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "tree查询",
  "path": "/tree",
  "description": "",
  "groupId": "e65076e23083465b8aec7b3b8803fd7f",
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
          "value": "1173",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Wed, 09 Nov 2022 05:46:28 GMT",
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
                  "value": "1123598813738675201"
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
                  "key": "ancestors",
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
                  "key": "deptCategory",
                  "required": false,
                  "validateType": 0,
                  "value": "1"
                },
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "deptName",
                  "required": false,
                  "validateType": 0,
                  "value": "刀锋科技"
                },
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "fullName",
                  "required": false,
                  "validateType": 0,
                  "value": "江苏刀锋科技有限公司"
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
                  "value": "2022-10-29T06:58:53.000Z"
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
          "value": "76"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": [\n    {\n      \"id\": \"748179393636990976\",\n      \"tenantId\": \"000000\",\n      \"parentId\": \"0\",\n      \"ancestors\": null,\n      \"deptCategory\": 1,\n      \"deptName\": \"测试\",\n      \"fullName\": \"测试公司\",\n      \"sort\": 0,\n      \"remark\": null,\n      \"deleted\": 0,\n      \"createdBy\": \"743789983910854656\",\n      \"updatedBy\": null,\n      \"createdAt\": \"2022-10-29T06:58:53.000Z\",\n      \"updatedAt\": null\n    },\n    {\n      \"id\": \"1123598813738675201\",\n      \"tenantId\": \"000000\",\n      \"parentId\": \"0\",\n      \"ancestors\": \"0\",\n      \"deptCategory\": 1,\n      \"deptName\": \"MagicNodeTeam\",\n      \"fullName\": \"MagicNodeTeam\",\n      \"sort\": 1,\n      \"remark\": null,\n      \"deleted\": 0,\n      \"createdBy\": null,\n      \"updatedBy\": null,\n      \"createdAt\": null,\n      \"updatedAt\": null,\n      \"children\": [\n        {\n          \"id\": \"1123598813738675202\",\n          \"tenantId\": \"000000\",\n          \"parentId\": \"1123598813738675201\",\n          \"ancestors\": \"0,1123598813738675201\",\n          \"deptCategory\": 1,\n          \"deptName\": \"Team1\",\n          \"fullName\": \"Team1\",\n          \"sort\": 1,\n          \"remark\": null,\n          \"deleted\": 0,\n          \"createdBy\": null,\n          \"updatedBy\": null,\n          \"createdAt\": null,\n          \"updatedAt\": null\n        },\n        {\n          \"id\": \"1123598813738675203\",\n          \"tenantId\": \"000000\",\n          \"parentId\": \"1123598813738675201\",\n          \"ancestors\": \"0,1123598813738675201\",\n          \"deptCategory\": 1,\n          \"deptName\": \"Team2\",\n          \"fullName\": \"Team2\",\n          \"sort\": 1,\n          \"remark\": null,\n          \"deleted\": 0,\n          \"createdBy\": null,\n          \"updatedBy\": null,\n          \"createdAt\": null,\n          \"updatedAt\": null\n        }\n      ]\n    }\n  ],\n  \"executeTime\": 76\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-09 13:46:28",
  "createdAt": "2022-10-28 23:35:43",
  "createdBy": "",
  "updatedBy": "",
  "id": "3643a5b4c0bc440082e0ad404d569559"
}
================================*/
const toTree = async (parentId) => {
  const list = await db.table('sys_dept').logic().tenant().where().eq('parentId', parentId).orderBy('sort').select();
  for (const data of list) {
    const children = await toTree(data.id);
    if (children.length > 0) {
      data.children = children;
    }
  }
  return list;
}

return await toTree("0");