/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "保存菜单",
  "path": "/save",
  "description": "",
  "groupId": "1ba5cb19cc9c45f18bd64ef7b04fe876",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [
      {
        "description": "允许拥有该权限的访问",
        "value": "system:menu:save",
        "key": "permission"
      }
    ],
    "paths": [],
    "headers": [],
    "requestBodyDefinition": {
      "requestType": "json",
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
          "value": "744713751759945728"
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
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "permissionCode",
          "required": false,
          "validateType": 0,
          "value": "system:menu"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "name",
          "required": false,
          "validateType": 0,
          "value": "系统管理"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "path",
          "required": false,
          "validateType": 0,
          "value": "/system/menu"
        },
        {
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "category",
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
          "key": "isOpen",
          "required": false,
          "validateType": 0,
          "value": "0"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"id\": \"744713751759945728\",\r\n  \"parentId\": \"0\",\r\n  \"permissionCode\": \"system:menu\",\r\n  \"name\": \"系统管理\",\r\n  \"path\": \"/system/menu\",\r\n  \"category\": 1,\r\n  \"sort\": 0,\r\n  \"isOpen\": 0\r\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    },
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
          "value": "Mon, 24 Oct 2022 12:31:59 GMT",
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
          "value": "84"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": 1,\n  \"executeTime\": 84\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-24 22:11:01",
  "createdAt": "2022-10-24 18:49:30",
  "createdBy": "",
  "updatedBy": "",
  "id": "6b244c46212045c989965723163b6370"
}
================================*/
const menuCacheDelete = await importFunction('/system/menu/cache/delete');

if (body.path) {
  const pathCount = await await db.table('sys_menu').logic().where().eq('path', body.path).ne(not_null(body.id), 'id', body.id).count();
  if (pathCount > 0) {
    exit(400, '菜单链接已存在');
  }
}

if (body.permissionCode) {
  const permissionCount = await await db.table('sys_menu').logic().where().eq('permissionCode', body.permissionCode).ne(not_null(body.id), 'id', body.id).count();
  if (permissionCount > 0) {
    exit(400, '权限标识已存在');
  }
}

await db.deleteCache("permsiions");

if (body.id) {
  await menuCacheDelete(body.id);
}

return await db.table("sys_menu").primary("id").withBlank().save(body);
