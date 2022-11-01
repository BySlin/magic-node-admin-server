/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "保存角色",
  "path": "/save",
  "description": "",
  "groupId": "5cf5939cb80f43ff90e954657fc50b93",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
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
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "roleName",
          "required": true,
          "validateType": 0,
          "value": "test"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "roleAlias",
          "required": true,
          "validateType": 0,
          "value": "test"
        },
        {
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "permission",
          "required": true,
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
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "remark",
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
              "value": ""
            }
          ],
          "dataType": "Array",
          "description": "",
          "error": "",
          "expression": "",
          "key": "menuIds",
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
              "value": ""
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
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"id\": \"\",\r\n  \"tenantId\": \"000000\",\r\n  \"roleName\": \"test\",\r\n  \"roleAlias\": \"test\",\r\n  \"permission\": 0,\r\n  \"sort\": 1,\r\n  \"remark\": \"\",\r\n  \"menuIds\": [\"\"],\r\n  \"deptIds\": [\"\"]\r\n}",
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
          "value": "89",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 29 Oct 2022 07:53:13 GMT",
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
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
          "required": false,
          "validateType": 0,
          "value": "748206733620412416"
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
          "value": "13"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": \"748206733620412416\",\n  \"executeTime\": 13\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-01 17:17:28",
  "createdAt": "2022-10-25 16:39:47",
  "createdBy": "",
  "updatedBy": "",
  "id": "5995b90ac9da461e9cd15e81039083d9"
}
================================*/
const cacheDelete = await importFunction('/system/role/cache/delete');

body.tenantId = ctx.user.tenantId;

if (body.roleAlias) {
  const roleAliasCount = await db.table('sys_role').logic().where().eq('roleAlias', body.roleAlias).ne(not_null(body.id), 'id', body.id).count();
  if (roleAliasCount > 0) {
    exit(400, '角色别名已存在');
  }
}

return await db.transaction(async () => {
  const deptIds = body.deptIds;
  const menuIds = body.menuIds;

  delete body.deptIds;
  delete body.menuIds;

  const result = await db.table("sys_role").primary("id").withBlank().saveOrUpdate(body);
  const roleId = not_blank(body.id) ? body.id : result;

  await db.table('sys_role_menu').where().eq('roleId', roleId).delete();
  await db.table('sys_role_menu').batchInsert(menuIds.map(menuId => ({
    menuId,
    roleId
  })));

  await db.table('sys_role_dept').where().eq('roleId', roleId).delete();
  await db.table('sys_role_dept').batchInsert(deptIds.map(deptId => ({
    deptId,
    roleId
  })));

  return result;
});