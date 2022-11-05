/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "DELETE",
  "fileName": "删除",
  "path": "/delete",
  "description": "",
  "groupId": "1ba5cb19cc9c45f18bd64ef7b04fe876",
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
        "value": "123456"
      }
    ],
    "options": [
      {
        "description": "允许拥有该权限的访问",
        "value": "system:menu:write",
        "key": "permission"
      }
    ],
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
          "value": "69",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Fri, 28 Oct 2022 18:27:37 GMT",
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
          "value": "0"
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
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": 0,\n  \"executeTime\": 5\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-05 21:28:53",
  "createdAt": "2022-10-24 22:23:19",
  "createdBy": "",
  "updatedBy": "",
  "id": "99882503c9dc4e74a7c8f3a82ed0608e"
}
================================*/
const ids = query.ids.split(',');

const menuCount = await db.table('sys_menu')
  .logic()
  .where()
  .in('parentId', ids)
  .count();
if (menuCount > 0) {
  exit(400, '请先删除子节点!');
}
const clearPermissionsByMenuIds = await importFunction('/auth/clearPermissionsByMenuIds');

return await db.transaction(async () => {
  await db.table('sys_role_menu').where().in("menuId", ids).delete();
  await clearPermissionsByMenuIds(ids);

  return await db.table("sys_menu").logic().where().in("id", ids).delete();
});