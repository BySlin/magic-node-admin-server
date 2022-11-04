/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "列表查询",
  "path": "/list",
  "description": "",
  "groupId": "54d7b65487a3419c8cad96b4e7120d46",
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
        "key": "username",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "deptId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": "748179393636990976"
      },
      {
        "description": "",
        "expression": "",
        "key": "realname",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "roleId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "nickname",
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
          "value": "770",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 04 Nov 2022 13:52:15 GMT",
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
                      "value": "751993076452425728"
                    },
                    {
                      "children": [],
                      "dataType": "String",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "username",
                      "required": false,
                      "validateType": 0,
                      "value": "test"
                    },
                    {
                      "children": [],
                      "dataType": "Object",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "realname",
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
                      "key": "nickname",
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
                      "key": "avator",
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
                      "key": "tenantId",
                      "required": false,
                      "validateType": 0,
                      "value": "000000"
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
                      "value": "2022-11-03T13:16:00.000Z"
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
          "value": "7"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"total\": 2,\n    \"list\": [\n      {\n        \"id\": \"752042257804165120\",\n        \"username\": \"test\",\n        \"realname\": null,\n        \"nickname\": null,\n        \"avator\": null,\n        \"tenantId\": \"000000\",\n        \"deptId\": \"748179393636990976\",\n        \"roleId\": \"748206733620412416\",\n        \"enabled\": 1,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": \"743789983910854656\",\n        \"createdAt\": \"2022-11-03T14:53:43.000Z\",\n        \"updatedAt\": \"2022-11-04T06:43:39.000Z\"\n      },\n      {\n        \"id\": \"752520938813128704\",\n        \"username\": \"test11\",\n        \"realname\": null,\n        \"nickname\": null,\n        \"avator\": null,\n        \"tenantId\": \"000000\",\n        \"deptId\": \"748179393636990976\",\n        \"roleId\": \"748206733620412416\",\n        \"enabled\": 1,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": \"743789983910854656\",\n        \"createdAt\": \"2022-11-04T06:44:46.000Z\",\n        \"updatedAt\": \"2022-11-04T07:17:41.000Z\"\n      }\n    ]\n  },\n  \"executeTime\": 7\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-04 21:52:57",
  "createdAt": "2022-11-03 20:03:26",
  "createdBy": "",
  "updatedBy": "",
  "id": "fdbcd5dc809e4c6ea2637ecc9bb97b06"
}
================================*/
const table = db.table('sys_user')
  .excludes('password')
  .logic()
  .tenant()
  .where()
  .eq(not_blank(query.tenantId), 'tenantId', query.tenantId)
  .like(not_blank(query.username), 'username', `%${query.username}%`)
  .like(not_blank(query.realname), 'realname', `%${query.realname}%`)
  .like(not_blank(query.nickname), 'nickname', `%${query.nickname}%`);

if (not_blank(query.deptId)) {
  const deptIds = query.deptId.split(',');
  table.custom(`id in ( SELECT userId FROM sys_user_dept WHERE deptId IN ( ${Array.from({ length: deptIds.length })
    .map(() => '?')
    .join(',')} ) )`, deptIds);
}

if (not_blank(query.roleId)) {
  const roleIds = query.roleId.split(',');
  table.custom(`id in ( SELECT userId FROM sys_user_role WHERE roleId IN ( ${Array.from({ length: roleIds.length })
    .map(() => '?')
    .join(',')} ) )`, roleIds);
}

return await table
  .orderBy('createdAt')
  .page(query.pageSize, query.current);