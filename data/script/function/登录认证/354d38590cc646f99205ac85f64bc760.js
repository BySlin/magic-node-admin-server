/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "判断是否超级管理员租户",
  "path": "/checkSuperAdminTenantId",
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
        "key": "tenantId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-11-05 22:49:22",
  "createdAt": "2022-11-03 21:24:15",
  "createdBy": "",
  "updatedBy": "",
  "id": "354d38590cc646f99205ac85f64bc760"
}
================================*/
const SUPER_TENANT_ID = '000000';

return SUPER_TENANT_ID === tenantId;