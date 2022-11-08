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
  "updatedAt": "2022-11-08 21:05:38",
  "createdAt": "2022-11-04 21:27:55",
  "createdBy": "",
  "updatedBy": "",
  "id": "54f2a9b66885480fbc5ddc69c002c289"
}
================================*/
const { httpError } = require("@midwayjs/core");

const getPermissions = await importFunction('/auth/getPermissions');
const options = route.options;

//匿名访问的接口直接跳过
if (options.anonymous) {
  return await next();
}

const { permissions, roleCodes } = await getPermissions(ctx.user.id);

if (not_blank(options.role)) {
  if (roleCodes.includes(options.role)) {
    return await next();
  }
  throw new httpError.ForbiddenError('权限不足！');
}

if (not_blank(options.permission)) {
  if (permissions.includes(options.permission)) {
    return await next();
  }
  throw new httpError.ForbiddenError('权限不足！');
}


return await next();