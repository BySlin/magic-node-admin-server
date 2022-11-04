/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "用户信息",
  "path": "/info",
  "description": "",
  "groupId": "4dac464312424adca284b3b36bceaafd",
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
          "value": "996",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 04 Nov 2022 14:39:26 GMT",
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
              "value": "743789983910854656"
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
              "value": "admin"
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
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "avator",
              "required": false,
              "validateType": 0,
              "value": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
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
              "key": "dataPermission",
              "required": false,
              "validateType": 0,
              "value": "0"
            },
            {
              "children": [
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "-",
                  "required": false,
                  "validateType": 0,
                  "value": "1123598816738675201"
                }
              ],
              "dataType": "Array",
              "description": "",
              "error": "",
              "expression": "",
              "key": "roleIds",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [
                {
                  "children": [],
                  "dataType": "String",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "-",
                  "required": false,
                  "validateType": 0,
                  "value": "1123598813738675201"
                }
              ],
              "dataType": "Array",
              "description": "",
              "error": "",
              "expression": "",
              "key": "deptIds",
              "required": false,
              "validateType": 0,
              "value": ""
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
                      "value": "SUPER_ADMIN"
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
              "key": "roles",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "Boolean",
              "description": "",
              "error": "",
              "expression": "",
              "key": "superAdmin",
              "required": false,
              "validateType": 0,
              "value": "true"
            },
            {
              "children": [],
              "dataType": "Array",
              "description": "",
              "error": "",
              "expression": "",
              "key": "permissions",
              "required": false,
              "validateType": 0,
              "value": ""
            },
            {
              "children": [],
              "dataType": "Array",
              "description": "",
              "error": "",
              "expression": "",
              "key": "dataPermissionDeptIds",
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
          "value": "4"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"id\": \"743789983910854656\",\n    \"username\": \"admin\",\n    \"realname\": null,\n    \"nickname\": null,\n    \"avator\": \"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png\",\n    \"tenantId\": \"000000\",\n    \"enabled\": 1,\n    \"dataPermission\": 0,\n    \"dataPermissionDeptIds\": [],\n    \"roleIds\": [\n      \"1123598816738675201\"\n    ],\n    \"deptIds\": [\n      \"1123598813738675201\"\n    ],\n    \"roles\": [\n      {\n        \"roleName\": \"超级管理员\",\n        \"roleAlias\": \"SUPER_ADMIN\",\n        \"permission\": 0\n      }\n    ],\n    \"permissions\": [\n      \"system\",\n      \"system:menu\",\n      \"system:role\",\n      \"system:menu:create\",\n      \"system:dept\",\n      \"system:dict\",\n      \"system:tenant\",\n      \"system:menu:update\",\n      \"system:role:create\",\n      \"system:role:update\",\n      \"system:dept:create\",\n      \"system:dept:update\",\n      \"system:dict:create\",\n      \"system:dict:update\",\n      \"system:tenant:create\",\n      \"system:tenant:update\",\n      \"system:menu:delete\",\n      \"system:menu:detail\",\n      \"system:role:delete\",\n      \"system:role:detail\",\n      \"system:dept:delete\",\n      \"system:dept:detail\",\n      \"system:dict:delete\",\n      \"system:dict:detail\",\n      \"system:tenant:delete\",\n      \"system:tenant:detail\"\n    ],\n    \"superAdmin\": true\n  },\n  \"executeTime\": 4\n}",
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
  "updatedAt": "2022-11-04 22:39:26",
  "createdAt": "2022-10-23 17:54:03",
  "createdBy": "",
  "updatedBy": "",
  "id": "073808e78c6c4c2fb524846cca092604"
}
================================*/
const getDataPermission = await importFunction('/auth/getDataPermission');

const userId = ctx.user.id;

const avator = not_empty(ctx.user.avator) ? ctx.user.avator : 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';

const roleIds = (await db.table('sys_user_role').where().eq('userId', userId).select()).map(v => v.roleId);
const deptIds = (await db.table('sys_user_dept').where().eq('userId', userId).select()).map(v => v.deptId);
const roles = roleIds.length > 0 ? await db.table('sys_role').columns('roleName', 'roleAlias', 'permission').logic().where().in('id', roleIds).select() : [];
const superAdmin = roles.filter(r => r.roleAlias === 'SUPER_ADMIN').length > 0;
const permissions = roleIds.length > 0 ? (await db.table('sys_menu')
  .column('code')
  .logic()
  .where()
  .custom(!superAdmin, `id in ( SELECT menuId FROM sys_role_menu WHERE roleId IN ( ${Array.from({ length: roleIds.length })
    .map(() => '?')
    .join(',')} ) )`, roleIds)
  .select()).map(v => v.code) : [];
const dataPermission = await getDataPermission(roles.map(r => r.permission));
let dataPermissionDeptIds = [];

if (dataPermission === 4) {
  dataPermissionDeptIds = roleIds.length > 0 ? (await db.table('sys_role_dept').column('deptId').where().in('roleId', roleIds)).map(v => v.deptId) : [];
}

return {
  ...ctx.user,
  dataPermission,
  dataPermissionDeptIds,
  avator,
  roleIds,
  deptIds,
  roles,
  permissions,
  superAdmin
};