/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "清除用户权限缓存根据角色IDS",
  "path": "/clearPermissionsByRoleIds",
  "description": "",
  "groupId": "9a0dde73dc7044d0a8af56bc900d4737",
  "fileLock": false,
  "enabled": true,
  "returnType": "Object",
  "definition": {
    "parameters": [
      {
        "description": "",
        "expression": "",
        "key": "roleIds",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-05 21:29:17",
  "createdAt": "2022-11-05 21:08:07",
  "createdBy": "",
  "updatedBy": "",
  "id": "59a3c19eb24a4aa88ce3c5d7ab4520b2"
}
================================*/
if (roleIds.length > 0) {
  const clearPermissions = await importFunction('/auth/clearPermissions');
  const userIds = (await db.table('sys_user_role').columns('userId').where().in('roleId', roleIds).select()).map(v => v.userId);

  await clearPermissions(userIds);
}

