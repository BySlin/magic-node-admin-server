/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "保存字典",
  "path": "/save",
  "description": "",
  "groupId": "f0ccd6099f5244cebff944f81ee40df7",
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
          "key": "id",
          "required": false,
          "validateType": 0,
          "value": ""
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "parentId",
          "required": false,
          "validateType": 0,
          "value": "0"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "code",
          "required": true,
          "validateType": 0,
          "value": "buttonType"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "dictKey",
          "required": true,
          "validateType": 0,
          "value": "-1"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "dictValue",
          "required": true,
          "validateType": 0,
          "value": "按钮类型"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "remark",
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
          "key": "sort",
          "required": false,
          "validateType": 0,
          "value": "0"
        },
        {
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "sealed",
          "required": false,
          "validateType": 0,
          "value": "0"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"id\": \"\",\r\n  \"parentId\": \"0\",\r\n  \"code\": \"buttonType\",\r\n  \"dictKey\": \"-1\",\r\n  \"dictValue\": \"按钮类型\",\r\n  \"remark\": \"\",\r\n  \"sort\": 0,\r\n  \"sealed\": 0\r\n}",
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
          "value": "61",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Wed, 26 Oct 2022 16:32:55 GMT",
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
          "children": [],
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "executeTime",
          "required": false,
          "validateType": 0,
          "value": "10"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"executeTime\": 10\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-31 20:34:19",
  "createdAt": "2022-10-25 22:09:14",
  "createdBy": "",
  "updatedBy": "",
  "id": "42ceca1eddb34ea39f96396bfb5b02ae"
}
================================*/
const dictCount = await db.table('sys_dict')
  .logic()
  .where()
  .eq('code', body.code)
  .eq('dictKey', body.dictKey)
  .ne(not_null(body.id), 'id', body.id).count();
if (dictCount > 0) {
  exit(400, '当前字典键值已存在!');
}

if (not_empty(body.id) && body.parentId === '0') {
  const parentDict = await db.table('sys_dict').eq("id", body.id);
  await db.table('sys_dict')
    .where()
    .eq("code", parentDict.code)
    .ne("parentId", "0")
    .update({
      code: body.code
    });
}

return await db.table("sys_dict").primary("id").withBlank().saveOrUpdate(body);
