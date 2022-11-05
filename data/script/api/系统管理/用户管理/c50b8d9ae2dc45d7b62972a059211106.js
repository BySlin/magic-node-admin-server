/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "保存用户",
  "path": "/save",
  "description": "",
  "groupId": "54d7b65487a3419c8cad96b4e7120d46",
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
          "key": "username",
          "required": false,
          "validateType": 0,
          "value": "test"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "password",
          "required": false,
          "validateType": 0,
          "value": "E10ADC3949BA59ABBE56E057F20F883E"
        },
        {
          "children": [],
          "dataType": "String",
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
          "key": "realname",
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
          "value": ""
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
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "deptId",
          "required": false,
          "validateType": 0,
          "value": "748179393636990976"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "roleId",
          "required": false,
          "validateType": 0,
          "value": ""
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"id\": \"\",\r\n  \"tenantId\": \"000000\",\r\n  \"username\": \"test\",\r\n  \"password\": \"E10ADC3949BA59ABBE56E057F20F883E\",\r\n  \"nickname\": \"\",\r\n  \"realname\": \"\",\r\n  \"avator\": \"\",\r\n  \"enabled\": 1,\r\n  \"deptId\": \"748179393636990976\",\r\n  \"roleId\": \"\"\r\n}",
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
          "value": "90",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Thu, 03 Nov 2022 14:53:43 GMT",
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
          "value": "752042257804165120"
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
          "value": "147"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": \"752042257804165120\",\n  \"executeTime\": 147\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-05 22:28:44",
  "createdAt": "2022-11-03 20:01:57",
  "createdBy": "",
  "updatedBy": "",
  "id": "c50b8d9ae2dc45d7b62972a059211106"
}
================================*/
const clearPermissions = await importFunction('/auth/clearPermissions');
const checkTenantId = await importFunction('/auth/checkTenantId');
//密码加密比较模块
const passwordEncoder = await importModule('passwordEncoder');
const isUpdate = not_blank(body.id);
const tenantId = ctx.user.tenantId;

if (is_blank(body.tenantId)) {
  body.tenantId = tenantId;
} else if (!(await checkTenantId(tenantId)) && body.tenantId !== tenantId) {
  exit(400, "禁止越权操作！");
}

const exists = await db.table('sys_user').logic().tenant().where().eq('username', body.username).ne(not_null(body.id), 'id', body.id).exists();
if (exists) {
  exit(400, '用户账户不能重复！');
}

if (isUpdate) {
  delete body.username;
  delete body.password;
} else {
  body.password = passwordEncoder.encrypt(body.password);
}
return await db.transaction(async () => {
  const deptIds = not_blank(body.deptId) ? body.deptId.split(',') : [];
  const roleIds = not_blank(body.roleId) ? body.roleId.split(',') : [];

  delete body.roleId;
  delete body.deptId;

  const result = await db.table("sys_user").primary("id").withBlank().saveOrUpdate(body);
  const userId = isUpdate ? body.id : result;

  await db.table('sys_user_role').where().eq('userId', userId).delete();

  if (roleIds.length > 0) {
    await db.table('sys_user_role').batchInsert(roleIds.map(roleId => ({
      userId,
      roleId
    })));
  }


  await db.table('sys_user_dept').where().eq('userId', userId).delete();

  if (deptIds.length > 0) {
    await db.table('sys_user_dept').batchInsert(deptIds.map(deptId => ({
      userId,
      deptId
    })));
  }

  if (isUpdate) {
    await clearPermissions([userId]);
  }

  return result;
});