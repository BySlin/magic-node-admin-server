/*================================
{
  "type": "interceptor",
  "isFolder": false,
  "method": "Interceptor",
  "fileName": "权限拦截器",
  "path": "/permission",
  "description": "",
  "groupId": "45ba95b66ddb4d3486834259df0e3118",
  "fileLock": false,
  "enabled": true,
  "returnType": "Object",
  "definition": {
    "sort": 1
  },
  "updatedAt": "2022-11-05 22:59:49",
  "createdAt": "2022-11-04 21:27:55",
  "createdBy": "",
  "updatedBy": "",
  "id": "54f2a9b66885480fbc5ddc69c002c289"
}
================================*/
const getPermissions = await importFunction('/auth/getPermissions');

//匿名访问的接口直接跳过
if (route.options.anonymous) {
  return await next();
}

const permissions = await getPermissions(ctx.user.id);

return await next();