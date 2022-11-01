/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "下拉数据源",
  "path": "/select",
  "description": "",
  "groupId": "5cf5939cb80f43ff90e954657fc50b93",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
    "paths": [],
    "headers": []
  },
  "returnType": "",
  "updatedAt": "2022-11-01 17:42:41",
  "createdAt": "2022-10-29 15:53:57",
  "createdBy": "",
  "updatedBy": "",
  "id": "10f5e0c2ad6943b688654f3684d6a085"
}
================================*/
return await db.table('sys_role')
  .logic()
  .tenant()
  .orderBy('createdAt')
  .select();