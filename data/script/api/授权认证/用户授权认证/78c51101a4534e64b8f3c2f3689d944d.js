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
    "options": [],
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
          "required": false,
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
          "required": false,
          "validateType": 0,
          "value": "E10ADC3949BA59ABBE56E057F20F883E"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "captchaKey",
          "required": false,
          "validateType": 0,
          "value": "db4158477fce4258b58ebe3349b74e5e"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "captchaValue",
          "required": false,
          "validateType": 0,
          "value": "mhjk"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"username\": \"admin\",\r\n  \"password\": \"E10ADC3949BA59ABBE56E057F20F883E\",\r\n  \"captchaKey\": \"db4158477fce4258b58ebe3349b74e5e\",\r\n  \"captchaValue\": \"mhjk\"\r\n}",
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
          "value": "302",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sun, 23 Oct 2022 06:13:13 GMT",
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
              "dataType": "String",
              "description": "",
              "error": "",
              "expression": "",
              "key": "token",
              "required": false,
              "validateType": 0,
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Mzc4OTk4MzkxMDg1NDY1NiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjY1MDQ2ODgsImV4cCI6MTY2NjY3NzQ4OH0.umZz3wbfXOGSTLCE0qxcNI9nbB2IRsgwOcbNmamhSIg"
            },
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
          "value": "70"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"expiresIn\": 3600,\n    \"type\": \"bearer\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0Mzc4OTk4MzkxMDg1NDY1NiIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NjY1MDU1OTQsImV4cCI6MTY3MDEwNTU5NH0.KT2yRdOmakkT0R-ewvRvYUM1bFpgEl1_FBIIqKY5kE8\"\n  },\n  \"executeTime\": 70\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-23 14:13:14",
  "createdAt": "2022-10-22 15:22:17",
  "createdBy": "",
  "updatedBy": "",
  "id": "78c51101a4534e64b8f3c2f3689d944d"
}
================================*/
const assert = require('assert');
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

const user = await db.table("sys_user").where().eq("username", body.username).selectOne();
if (user != null) {
  //比较密码是否一致
  if (passwordEncoder.decrypt(body.password, user.password)) {
    //删除缓存中的验证码
    // await cache.del(cacheCaptchaKey);

    const expiresIn = 3600;

    return {
      expiresIn,
      type: "bearer",
      token: await jwtService.sign({
        id: user.id,
        username: user.username
      }, {
        expiresIn: expiresIn * 1000
      })
    };
  }
}

exit(400, "账号或密码错误");