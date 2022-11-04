/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "获取最大的数据权限",
  "path": "/getDataPermission",
  "description": "",
  "groupId": "9a0dde73dc7044d0a8af56bc900d4737",
  "fileLock": false,
  "enabled": true,
  "returnType": "Number",
  "definition": {
    "parameters": [
      {
        "description": "",
        "expression": "",
        "key": "dataPermissionArray",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-04 22:19:34",
  "createdAt": "2022-11-04 22:16:27",
  "createdBy": "",
  "updatedBy": "",
  "id": "5e6469b89e0245358e014f6994d90c9e"
}
================================*/
if (dataPermissionArray.length > 0) {
  return dataPermissionArray.sort()[0];
}

return 1;