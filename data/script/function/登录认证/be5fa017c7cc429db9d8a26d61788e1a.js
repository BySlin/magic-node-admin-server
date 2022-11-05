/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "获取用户权限信息",
  "path": "/getPermissions",
  "description": "",
  "groupId": "9a0dde73dc7044d0a8af56bc900d4737",
  "fileLock": false,
  "enabled": true,
  "returnType": "Object",
  "definition": {
    "parameters": [
      {
        "description": "用户id",
        "expression": "",
        "key": "userId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-05 19:16:14",
  "createdAt": "2022-11-05 11:25:28",
  "createdBy": "",
  "updatedBy": "",
  "id": "be5fa017c7cc429db9d8a26d61788e1a"
}
================================*/
const getDataPermission = await importFunction('/auth/getDataPermission');
const checkRoleIdSuperAdmin = await importFunction('/auth/checkRoleIdSuperAdmin');

return await cache.get(`user:permission:${userId}`, async () => {
  const roleIds = (await db.table('sys_user_role').where().eq('userId', userId).select()).map(v => v.roleId);
  const deptIds = (await db.table('sys_user_dept').where().eq('userId', userId).select()).map(v => v.deptId);
  const roles = roleIds.length > 0 ? await db.table('sys_role').columns('id', 'roleName', 'roleAlias', 'permission').logic().where().in('id', roleIds).select() : [];
  const superAdmin = await checkRoleIdSuperAdmin(roleIds);
  const permissions = roleIds.length > 0 ? (await db.table('sys_menu')
    .column('code')
    .logic()
    .where()
    .custom(!superAdmin, `id in ( SELECT menuId FROM sys_role_menu WHERE roleId IN ( ${Array.from({ length: roleIds.length })
      .map(() => '?')
      .join(',')} ) )`, roleIds)
    .select()).map(v => v.code) : [];
  const dataPermission = await getDataPermission(roles.map(r => r.permission));
  const roleCodes = roles.map(r => r.roleAlias);
  let dataPermissionDeptIds = [];

  if (dataPermission === 4) {
    dataPermissionDeptIds = roleIds.length > 0 ? (await db.table('sys_role_dept').column('deptId').where().in('roleId', roleIds)).map(v => v.deptId) : [];
  }
  return {
    roleIds,
    deptIds,
    dataPermission,
    dataPermissionDeptIds,
    roleCodes,
    permissions,
    superAdmin
  };
})

