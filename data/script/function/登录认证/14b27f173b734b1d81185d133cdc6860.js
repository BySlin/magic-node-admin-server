/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "清除用户权限缓存根据组织IDS",
  "path": "/clearPermissionsByDeptIds",
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
        "key": "deptIds",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-05 21:29:35",
  "createdAt": "2022-11-05 21:12:58",
  "createdBy": "",
  "updatedBy": "",
  "id": "14b27f173b734b1d81185d133cdc6860"
}
================================*/
if (deptIds.length > 0) {
  const clearPermissionsByRoleIds = await importFunction('/auth/clearPermissionsByRoleIds');
  const roleIds = (await db.table('sys_role_dept').columns('roleId').where().in('deptId', deptIds).select()).map(v => v.roleId);

  await clearPermissionsByRoleIds(roleIds);
}
