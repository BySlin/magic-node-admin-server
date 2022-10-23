/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "是否登录",
  "path": "/checkLogin",
  "description": "",
  "groupId": "9a0dde73dc7044d0a8af56bc900d4737",
  "fileLock": false,
  "enabled": true,
  "returnType": "Boolean",
  "definition": {
    "parameters": [
      {
        "description": "请求上下文",
        "expression": "",
        "key": "ctx",
        "dataType": "Object",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-10-23 15:23:42",
  "createdAt": "2022-10-23 14:19:37",
  "createdBy": "",
  "updatedBy": "",
  "id": "9eb8e005554e4444bb712db235ab9199"
}
================================*/
const jwtService = await importModule('jwtService');

return "hello magic-node";