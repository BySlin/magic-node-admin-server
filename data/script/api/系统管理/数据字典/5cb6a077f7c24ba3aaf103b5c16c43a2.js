/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "列表查询",
  "path": "/list",
  "description": "",
  "groupId": "f0ccd6099f5244cebff944f81ee40df7",
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
        "key": "code",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "dictValue",
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
          "value": "884",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Thu, 27 Oct 2022 07:25:03 GMT",
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
              "value": "3"
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
                      "value": "2022-10-26T15:31:52.000Z"
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
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"total\": 3,\n    \"list\": [\n      {\n        \"id\": \"746263254132588544\",\n        \"parentId\": \"0\",\n        \"remark\": null,\n        \"code\": \"sex\",\n        \"dictKey\": \"-1\",\n        \"dictValue\": \"性别\",\n        \"sort\": 0,\n        \"sealed\": 0,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": null,\n        \"createdAt\": \"2022-10-26T15:31:52.000Z\",\n        \"updatedAt\": null\n      },\n      {\n        \"id\": \"746263519673974784\",\n        \"parentId\": \"746263254132588544\",\n        \"remark\": null,\n        \"code\": \"sex\",\n        \"dictKey\": \"1\",\n        \"dictValue\": \"男\",\n        \"sort\": 0,\n        \"sealed\": 0,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": null,\n        \"createdAt\": \"2022-10-26T15:32:23.000Z\",\n        \"updatedAt\": null\n      },\n      {\n        \"id\": \"746263621796888576\",\n        \"parentId\": \"746263254132588544\",\n        \"remark\": null,\n        \"code\": \"sex\",\n        \"dictKey\": \"2\",\n        \"dictValue\": \"女\",\n        \"sort\": 0,\n        \"sealed\": 0,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": \"743789983910854656\",\n        \"createdAt\": \"2022-10-26T15:32:36.000Z\",\n        \"updatedAt\": \"2022-10-26T15:43:00.000Z\"\n      }\n    ]\n  },\n  \"executeTime\": 5\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-27 17:05:33",
  "createdAt": "2022-10-27 15:10:57",
  "createdBy": "",
  "updatedBy": "",
  "id": "5cb6a077f7c24ba3aaf103b5c16c43a2"
}
================================*/
return await db.table('sys_dict')
  .logic()
  .where()
  .like(not_blank(query.code), 'code', `%${query.code}%`)
  .like(not_blank(query.dictValue), 'dictValue', `%${query.dictValue}%`)
  .orderBy('sort')
  .page(query.pageSize, query.current);