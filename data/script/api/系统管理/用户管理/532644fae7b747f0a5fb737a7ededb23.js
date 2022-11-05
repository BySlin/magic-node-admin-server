/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "DELETE",
  "fileName": "删除",
  "path": "/delete",
  "description": "",
  "groupId": "54d7b65487a3419c8cad96b4e7120d46",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [
      {
        "description": "ids多个id用,隔开",
        "expression": "",
        "key": "ids",
        "dataType": "String",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "743789983910854656"
      }
    ],
    "options": [],
    "paths": [],
    "headers": [],
    "responseBodyDefinition": {
      "responseType": "json",
      "headers": [
        {
          "key": "access-control-allow-credentials",
          "value": "true",
          "description": ""
        },
        {
          "key": "access-control-allow-origin",
          "value": "http://127.0.0.1:7001",
          "description": ""
        },
        {
          "key": "access-control-expose-headers",
          "value": "Authorization, Content-Disposition, Date",
          "description": ""
        },
        {
          "key": "connection",
          "value": "keep-alive",
          "description": ""
        },
        {
          "key": "content-length",
          "value": "70",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Thu, 03 Nov 2022 13:18:36 GMT",
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
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
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
          "key": "executeTime",
          "required": false,
          "validateType": 0,
          "value": "83"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": 1,\n  \"executeTime\": 83\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-05 21:16:12",
  "createdAt": "2022-11-03 20:02:24",
  "createdBy": "",
  "updatedBy": "",
  "id": "532644fae7b747f0a5fb737a7ededb23"
}
================================*/
const clearPermissions = await importFunction('/auth/clearPermissions');
const checkUserIdSuperAdmin = await importFunction('/auth/checkUserIdSuperAdmin');
const ids = query.ids.split(',');

if (await checkUserIdSuperAdmin(ids)) {
  exit(400, '禁止删除超级管理员!');
}

return await db.transaction(async () => {
  await db.table('sys_user_role').where().in("userId", ids).delete();
  await db.table('sys_user_dept').where().in("userId", ids).delete();

  await clearPermissions(ids);
  return await db.table("sys_user").logic().tenant().where().in("id", ids).delete();
});