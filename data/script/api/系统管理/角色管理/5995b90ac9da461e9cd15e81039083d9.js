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
          "key": "code",
          "required": false,
          "validateType": 0,
          "value": "admin"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"code\": \"admin\"\r\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-26 23:27:16",
  "createdAt": "2022-10-25 16:39:47",
  "createdBy": "",
  "updatedBy": "",
  "id": "5995b90ac9da461e9cd15e81039083d9"
}
================================*/
const cacheDelete = await importFunction('/system/role/cache/delete');

if (body.code) {
  const codeCount = await db.table('sys_role').logic().where().eq('code', body.code).ne(not_null(body.id), 'id', body.id).count();
  if (codeCount > 0) {
    exit(400, '角色编码已存在');
  }
}

return await db.table("sys_dict").primary("id").withBlank().save(body);
