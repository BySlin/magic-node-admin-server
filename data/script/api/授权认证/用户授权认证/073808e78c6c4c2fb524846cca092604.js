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
          "value": "942",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 05 Nov 2022 11:17:21 GMT",
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
              "children": [],
              "dataType": "Array",
              "description": "",
              "error": "",
              "expression": "",
              "key": "dataPermissionDeptIds",
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
                  "value": "SUPER_ADMIN"
                }
              ],
              "dataType": "Array",
              "description": "",
              "error": "",
              "expression": "",
              "key": "roleCodes",
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
                  "value": "system"
                }
              ],
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
              "dataType": "Boolean",
              "description": "",
              "error": "",
              "expression": "",
              "key": "superAdmin",
              "required": false,
              "validateType": 0,
              "value": "true"
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
          "value": "2"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"id\": \"743789983910854656\",\n    \"username\": \"admin\",\n    \"realname\": null,\n    \"nickname\": null,\n    \"avator\": \"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png\",\n    \"tenantId\": \"000000\",\n    \"enabled\": 1,\n    \"roleIds\": [\n      \"1123598816738675201\"\n    ],\n    \"deptIds\": [\n      \"1123598813738675201\"\n    ],\n    \"dataPermission\": 0,\n    \"dataPermissionDeptIds\": [],\n    \"roleCodes\": [\n      \"SUPER_ADMIN\"\n    ],\n    \"permissions\": [\n      \"system\",\n      \"system:menu\",\n      \"system:role\",\n      \"system:menu:create\",\n      \"system:dept\",\n      \"system:dict\",\n      \"system:tenant\",\n      \"system:menu:update\",\n      \"system:role:create\",\n      \"system:role:update\",\n      \"system:dept:create\",\n      \"system:dept:update\",\n      \"system:dict:create\",\n      \"system:dict:update\",\n      \"system:tenant:create\",\n      \"system:tenant:update\",\n      \"system:menu:delete\",\n      \"system:menu:detail\",\n      \"system:role:delete\",\n      \"system:role:detail\",\n      \"system:dept:delete\",\n      \"system:dept:detail\",\n      \"system:dict:delete\",\n      \"system:dict:detail\",\n      \"system:tenant:delete\",\n      \"system:tenant:detail\"\n    ],\n    \"superAdmin\": true\n  },\n  \"executeTime\": 2\n}",
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
  "updatedAt": "2022-11-05 19:17:21",
  "createdAt": "2022-10-23 17:54:03",
  "createdBy": "",
  "updatedBy": "",
  "id": "073808e78c6c4c2fb524846cca092604"
}
================================*/
const getPermissions = await importFunction('/auth/getPermissions');

const userId = ctx.user.id;
const avator = not_empty(ctx.user.avator) ? ctx.user.avator : 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';

const permissions = await getPermissions(userId);

return {
  ...ctx.user,
  avator,
  ...permissions
};