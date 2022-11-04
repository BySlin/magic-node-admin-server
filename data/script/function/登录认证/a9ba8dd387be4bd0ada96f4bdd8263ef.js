/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "根据用户IDS判断是否超级管理员",
  "path": "/checkUserIdSuperAdmin",
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
  "updatedAt": "2022-11-04 22:59:04",
  "createdAt": "2022-11-03 21:20:17",
  "createdBy": "",
  "updatedBy": "",
  "id": "a9ba8dd387be4bd0ada96f4bdd8263ef"
}
================================*/
const SUPER_ADMIN_ID = '743789983910854656';

return ids.includes(SUPER_ADMIN_ID);