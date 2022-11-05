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
          "value": "577",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Thu, 03 Nov 2022 13:40:40 GMT",
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
          "value": "5"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"total\": 2,\n    \"list\": [\n      {\n        \"id\": \"1123598816738675201\",\n        \"tenantId\": \"000000\",\n        \"roleName\": \"超级管理员\",\n        \"roleAlias\": \"SUPER_ADMIN\",\n        \"permission\": 0,\n        \"remark\": null,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": null,\n        \"createdAt\": null,\n        \"updatedAt\": null\n      },\n      {\n        \"id\": \"748206733620412416\",\n        \"tenantId\": \"000000\",\n        \"roleName\": \"管理员\",\n        \"roleAlias\": \"admin\",\n        \"permission\": 0,\n        \"remark\": null,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": \"743789983910854656\",\n        \"createdAt\": \"2022-10-29T07:53:13.000Z\",\n        \"updatedAt\": \"2022-11-01T11:36:18.000Z\"\n      }\n    ]\n  },\n  \"executeTime\": 5\n}",
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
  "updatedAt": "2022-11-05 22:50:46",
  "createdAt": "2022-10-29 15:43:58",
  "createdBy": "",
  "updatedBy": "",
  "id": "267048474e3a47338eb9c54109c96407"
}
================================*/
const checkSuperAdminTenantId = await importFunction('/auth/checkSuperAdminTenantId');
const tenantId = ctx.user.tenantId;

return await db.table('sys_role')
  .logic()
  .tenant()
  .where()
  //管理员租户才能筛选租户
  .eq((await checkSuperAdminTenantId(tenantId)) && not_blank(query.tenantId), 'tenantId', query.tenantId)
  .like(not_blank(query.roleName), 'roleName', `%${query.roleName}%`)
  .like(not_blank(query.roleAlias), 'roleAlias', `%${query.roleAlias}%`)
  .orderByDesc('createdAt')
  .page(query.pageSize, query.current);