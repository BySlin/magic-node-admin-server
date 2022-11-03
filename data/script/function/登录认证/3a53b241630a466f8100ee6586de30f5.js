/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "根据CODE判断是否超级管理员",
  "path": "/checkSuperAdminCode",
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
        "key": "codes",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-03 21:25:28",
  "createdAt": "2022-11-03 21:22:51",
  "createdBy": "",
  "updatedBy": "",
  "id": "3a53b241630a466f8100ee6586de30f5"
}
================================*/
const SUPER_ADMIN_CODE = 'SUPER_ADMIN';

return codes.includes(SUPER_ADMIN_ID);