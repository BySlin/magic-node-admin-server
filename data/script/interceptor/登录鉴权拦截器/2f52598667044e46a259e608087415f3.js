/*================================
{
  "type": "interceptor",
  "isFolder": false,
  "method": "Interceptor",
  "fileName": "登录鉴权",
  "path": "/login",
  "description": "",
  "groupId": "45ba95b66ddb4d3486834259df0e3118",
  "fileLock": false,
  "enabled": true,
  "returnType": "Object",
  "definition": {
    "sort": 0
  },
  "updatedAt": "2022-10-23 17:23:00",
  "createdAt": "2022-10-23 13:54:11",
  "createdBy": "",
  "updatedBy": "",
  "id": "2f52598667044e46a259e608087415f3"
}
================================*/
const { httpError } = require("@midwayjs/core");
const jwtService = await importModule('jwtService');

//匿名访问的接口直接跳过
if (route.options.anonymous) {
  return await next();
}

const authorization = ctx.headers['authorization'];
// 判断下有没有校验信息
if (is_blank(authorization)) {
  throw new httpError.UnauthorizedError('缺少访问凭证，请添加Header[Authorization=Bearer accessToken]');
}
// 从 header 上获取校验信息
const parts = authorization.trim().split(' ');
if (parts.length !== 2) {
  throw new httpError.UnauthorizedError('无效的凭证');
}

const [scheme, token] = parts;
if (!/^Bearer$/i.test(scheme)) {
  throw new httpError.UnauthorizedError('缺少Bearer');
}

try {
  // 验证token，过期会抛出异常
  const jwt = await jwtService.verify(token, { complete: true });
  // jwt中存储的user信息
  const payload = jwt['payload'];
  // 取出缓存的用户信息
  const cacheUser = await cache.get("token:" + token);
  if (payload.username !== cacheUser.username) {
    throw new httpError.UnauthorizedError('无效的凭证');
  }
  // 存储到访问上下文中
  ctx.user = cacheUser;
} catch (e) {
  throw new httpError.UnauthorizedError(e.message);
}

return await next();