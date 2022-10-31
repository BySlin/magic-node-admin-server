/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "详情",
  "path": "/detail",
  "description": "",
  "groupId": "f0ccd6099f5244cebff944f81ee40df7",
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
        "value": "746263254132588544"
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
          "value": "349",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Mon, 31 Oct 2022 13:08:13 GMT",
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
              "value": "746263254132588544"
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
              "key": "remark",
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
              "value": "sex"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "dictKey",
              "required": false,
              "validateType": 0,
              "value": "-1"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "dictValue",
              "required": false,
              "validateType": 0,
              "value": "性别"
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
              "key": "sealed",
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
              "value": "2022-10-26T15:31:52.000Z"
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
              "value": "2022-10-27T08:09:49.000Z"
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
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"id\": \"746263254132588544\",\n    \"parentId\": \"0\",\n    \"remark\": null,\n    \"code\": \"sex\",\n    \"dictKey\": \"-1\",\n    \"dictValue\": \"性别\",\n    \"sort\": 0,\n    \"sealed\": 0,\n    \"deleted\": 0,\n    \"createdBy\": \"743789983910854656\",\n    \"updatedBy\": \"743789983910854656\",\n    \"createdAt\": \"2022-10-26T15:31:52.000Z\",\n    \"updatedAt\": \"2022-10-27T08:09:49.000Z\"\n  },\n  \"executeTime\": 4\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-31 21:08:13",
  "createdAt": "2022-10-31 21:07:46",
  "createdBy": "",
  "updatedBy": "",
  "id": "2c28041305b04aaf9c145538e55df5df"
}
================================*/
return await db.table("sys_dict").where().eq('id', query.id).selectOne();