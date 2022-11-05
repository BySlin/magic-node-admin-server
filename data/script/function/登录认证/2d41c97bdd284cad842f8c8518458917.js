/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "清除用户权限缓存根据菜单IDS",
  "path": "/clearPermissionsByMenuIds",
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
        "key": "menuIds",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-05 21:29:45",
  "createdAt": "2022-11-05 21:21:38",
  "createdBy": "",
  "updatedBy": "",
  "id": "2d41c97bdd284cad842f8c8518458917"
}
================================*/
if (menuIds.length > 0) {
  const clearPermissionsByRoleIds = await importFunction('/auth/clearPermissionsByRoleIds');
  const roleIds = (await db.table('sys_role_menu').columns('roleId').where().in('menuId', menuIds).select()).map(v => v.roleId);

  await clearPermissionsByRoleIds(roleIds);
}