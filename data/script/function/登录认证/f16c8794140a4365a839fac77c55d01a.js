/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "清除用户权限缓存",
  "path": "/clearPermissions",
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
        "key": "userIds",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-05 21:00:54",
  "createdAt": "2022-11-05 21:00:01",
  "createdBy": "",
  "updatedBy": "",
  "id": "f16c8794140a4365a839fac77c55d01a"
}
================================*/
for (const userId of userIds) {
  await cache.del(`user:permission:${userId}`);
}