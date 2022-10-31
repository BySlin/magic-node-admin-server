/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "详情",
  "path": "/detail",
  "description": "",
  "groupId": "e65076e23083465b8aec7b3b8803fd7f",
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
        "value": "748179393636990976"
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
          "value": "351",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Mon, 31 Oct 2022 13:09:27 GMT",
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
              "value": "748179393636990976"
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
              "dataType": "Object",
              "description": "",
              "error": "",
              "expression": "",
              "key": "ancestors",
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
              "value": "测试"
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
              "value": "测试公司"
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
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"id\": \"748179393636990976\",\n    \"tenantId\": \"000000\",\n    \"parentId\": \"0\",\n    \"ancestors\": null,\n    \"deptCategory\": 1,\n    \"deptName\": \"测试\",\n    \"fullName\": \"测试公司\",\n    \"sort\": 0,\n    \"remark\": null,\n    \"deleted\": 0,\n    \"createdBy\": \"743789983910854656\",\n    \"updatedBy\": null,\n    \"createdAt\": \"2022-10-29T06:58:53.000Z\",\n    \"updatedAt\": null\n  },\n  \"executeTime\": 5\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-31 21:09:27",
  "createdAt": "2022-10-31 21:09:20",
  "createdBy": "",
  "updatedBy": "",
  "id": "1267f0f203b84ac0809fbe80cd18cb15"
}
================================*/
return await db.table("sys_dept").where().eq('id', query.id).selectOne();