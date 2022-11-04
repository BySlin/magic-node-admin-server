/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "根据角色IDS判断是否超级管理员",
  "path": "/checkRoleIdSuperAdmin",
  "description": "",
  "groupId": "9a0dde73dc7044d0a8af56bc900d4737",
  "fileLock": false,
  "enabled": true,
  "returnType": "Boolean",
  "definition": {
    "parameters": [
      {
        "description": "",
        "expression": "",
        "key": "ids",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-04 23:00:38",
  "createdAt": "2022-11-04 22:58:47",
  "createdBy": "",
  "updatedBy": "",
  "id": "62df1a4329de45c6908f7eb41c595a29"
}
================================*/
const SUPER_ADMIN_ROLE_ID = '1123598816738675201';

return ids.includes(SUPER_ADMIN_ROLE_ID);