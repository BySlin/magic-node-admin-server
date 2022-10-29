/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "列表查询",
  "path": "/list",
  "description": "",
  "groupId": "5cf5939cb80f43ff90e954657fc50b93",
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
        "value": "20"
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
        "key": "roleName",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "roleAlias",
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
          "value": "1068",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 29 Oct 2022 07:52:26 GMT",
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
              "value": "5"
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
                      "value": "1123598816738675201"
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
                      "value": "超级管理员"
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
                      "value": "administrator"
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
          "value": "76"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"total\": 5,\n    \"list\": [\n      {\n        \"id\": \"1123598816738675201\",\n        \"tenantId\": \"000000\",\n        \"roleName\": \"超级管理员\",\n        \"roleAlias\": \"administrator\",\n        \"permission\": 0,\n        \"sort\": 1,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": null,\n        \"createdAt\": null,\n        \"updatedAt\": null\n      },\n      {\n        \"id\": \"1123598816738675202\",\n        \"tenantId\": \"000000\",\n        \"roleName\": \"用户\",\n        \"roleAlias\": \"user\",\n        \"permission\": 0,\n        \"sort\": 2,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": null,\n        \"createdAt\": null,\n        \"updatedAt\": null\n      },\n      {\n        \"id\": \"1123598816738675203\",\n        \"tenantId\": \"000000\",\n        \"roleName\": \"人事\",\n        \"roleAlias\": \"hr\",\n        \"permission\": 0,\n        \"sort\": 1,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": null,\n        \"createdAt\": null,\n        \"updatedAt\": null\n      },\n      {\n        \"id\": \"1123598816738675204\",\n        \"tenantId\": \"000000\",\n        \"roleName\": \"经理\",\n        \"roleAlias\": \"manager\",\n        \"permission\": 0,\n        \"sort\": 2,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": null,\n        \"createdAt\": null,\n        \"updatedAt\": null\n      },\n      {\n        \"id\": \"1123598816738675205\",\n        \"tenantId\": \"000000\",\n        \"roleName\": \"老板\",\n        \"roleAlias\": \"boss\",\n        \"permission\": 0,\n        \"sort\": 3,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": null,\n        \"createdAt\": null,\n        \"updatedAt\": null\n      }\n    ]\n  },\n  \"executeTime\": 76\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-29 15:54:19",
  "createdAt": "2022-10-29 15:43:58",
  "createdBy": "",
  "updatedBy": "",
  "id": "267048474e3a47338eb9c54109c96407"
}
================================*/
return await db.table('sys_role')
  .logic()
  .tenant()
  .where()
  .eq(not_blank(query.tenantId), 'tenantId', query.tenantId)
  .like(not_blank(query.roleName), 'roleName', `%${query.roleName}%`)
  .like(not_blank(query.roleAlias), 'roleAlias', `%${query.roleAlias}%`)
  .orderBy('createdAt')
  .page(query.pageSize, query.current);