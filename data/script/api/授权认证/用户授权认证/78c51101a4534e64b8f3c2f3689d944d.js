/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "登录用户验证",
  "path": "/token",
  "description": "",
  "groupId": "4dac464312424adca284b3b36bceaafd",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [
      {
        "description": "该接口需要不登录也可访问",
        "value": true,
        "key": "anonymous"
      }
    ],
    "paths": [],
    "headers": [],
    "requestBodyDefinition": {
      "requestType": "json",
      "children": [
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "username",
          "required": true,
          "validateType": 0,
          "value": "admin"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "password",
          "required": true,
          "validateType": 0,
          "value": "E10ADC3949BA59ABBE56E057F20F883E"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "tenantId",
          "required": false,
          "validateType": 0,
          "value": "000000",
          "defaultValue": "000000"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "captchaKey",
          "required": true,
          "validateType": 0,
          "value": "524ea27e489543a7a25d35b784e7528c"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "captchaValue",
          "required": true,
          "validateType": 0,
          "value": "jgz0"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"username\": \"admin\",\r\n  \"password\": \"E10ADC3949BA59ABBE56E057F20F883E\",\r\n  \"tenantId\": \"000000\",\r\n  \"captchaKey\": \"524ea27e489543a7a25d35b784e7528c\",\r\n  \"captchaValue\": \"jgz0\"\r\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    },
    "responseBodyDefinition": {
      "responseType": "json",
      "headers": [
        {
          "key": "access-control-allow-credentials",
          "value": "true",
          "description": ""
        },
        {
          "key": "access-control-allow-origin",
          "value": "http://127.0.0.1:7001",
          "description": ""
        },
        {
          "key": "access-control-expose-headers",
          "value": "Authorization, Content-Disposition, Date",
          "description": ""
        },
        {
          "key": "connection",
          "value": "keep-alive",
          "description": ""
        },
        {
          "key": "content-length",
          "value": "309",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sun, 23 Oct 2022 09:15:33 GMT",
          "description": ""
        },
        {
          "key": "keep-alive",
          "value": "timeout=5",
          "description": ""
        },
        {
          "key": "vary",
          "value": "Origin",
          "description": ""
        },
        {
          "key": "x-frame-options",
          "value": "SAMEORIGIN",
          "description": ""
        },
        {
          "key": "x-xss-protection",
          "value": "1; mode=block",
          "description": ""
        }
      ],
      "children": [
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "code",
          "required": false,
          "validateType": 0,
          "value": "200"
        },
        {
          "children": [],
          "dataType": "Boolean",
          "description": "",
          "error": "",
          "expression": "",
          "key": "success",
          "required": false,
          "validateType": 0,
          "value": "true"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "message",
          "required": false,
          "validateType": 0,
          "value": "OK"
        },
        {
          "children": [
            {
              "children": [],
              "dataType": "Number",
              "description": "",
              "error": "",
              "expression": "",
              "key": "expiresIn",
              "required": false,
              "validateType": 0,
              "value": "3600"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "type",
              "required": false,
              "validateType": 0,
              "value": "bearer"
            },
            {
              "children": [],
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "accessToken",
              "required": false,
              "validateType": 0,
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Mzc4OTk4MzkxMDg1NDY1NiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjY1MTY1MzMsImV4cCI6MTY2NjYwMjkzM30.TLdxjj-6nHgM7h5svX4W4B-sYm4IbTijcIWvD5Pdn6Q"
            }
          ],
          "dataType": "Object",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
          "required": false,
          "validateType": 0,
          "value": ""
        },
        {
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "executeTime",
          "required": false,
          "validateType": 0,
          "value": "76"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"expiresIn\": 86400,\n    \"accessToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Mzc4OTk4MzkxMDg1NDY1NiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjY1MTY1MzMsImV4cCI6MTY2NjYwMjkzM30.TLdxjj-6nHgM7h5svX4W4B-sYm4IbTijcIWvD5Pdn6Q\",\n    \"type\": \"Bearer\"\n  },\n  \"executeTime\": 76\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-28 23:27:05",
  "createdAt": "2022-10-22 15:22:17",
  "createdBy": "",
  "updatedBy": "",
  "id": "78c51101a4534e64b8f3c2f3689d944d"
}
================================*/
const assert = require('assert');
//env模块
const env = await importModule('env');
//jwt模块
const jwtService = await importModule('jwtService');
//密码加密比较模块
const passwordEncoder = await importModule('passwordEncoder');
//缓存验证码Key
const cacheCaptchaKey = "captcha:" + body.captchaKey;
//从缓存取出验证码
const captchaValue = await cache.get(cacheCaptchaKey);
//比较验证码
assert(captchaValue === body.captchaValue.toLowerCase(), "验证码错误");

const user = await db.table("sys_user")
  .where()
  .eq("username", body.username)
  .eq('tenantId', body.tenantId)
  .selectOne();
if (user != null) {
  //比较密码是否一致
  if (passwordEncoder.decrypt(body.password, user.password)) {
    //删除缓存中的验证码
    await cache.del(cacheCaptchaKey);

    const expiresIn = env.get('jwt.expiresIn');
    const userContext = {
      id: user.id,
      username: user.username,
      tenantId: user.tenantId,
    };
    const accessToken = await jwtService.sign(userContext);

    cache.set("token:" + accessToken, userContext, expiresIn);

    return {
      expiresIn,
      accessToken,
      type: "Bearer",
    };
  }
}

exit(400, "用户名或密码错误");