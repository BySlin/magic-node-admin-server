/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "保存租户",
  "path": "/save",
  "description": "",
  "groupId": "65c03aa6484843d9b029878255a136b8",
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
          "description": "主键",
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
          "description": "租户ID",
          "error": "",
          "expression": "",
          "key": "tenantId",
          "required": true,
          "validateType": 0,
          "value": "123456"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "租户名称",
          "error": "",
          "expression": "",
          "key": "tenantName",
          "required": true,
          "validateType": 0,
          "value": "测试"
        },
        {
          "children": [],
          "dataType": "Number",
          "description": "启用",
          "error": "",
          "expression": "",
          "key": "enabled",
          "required": true,
          "validateType": 0,
          "value": "1"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"id\": \"\",\r\n  \"tenantId\": \"123456\",\r\n  \"tenantName\": \"测试\",\r\n  \"enabled\": 1\r\n}",
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
          "value": "89",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Thu, 27 Oct 2022 11:40:19 GMT",
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
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "data",
          "required": false,
          "validateType": 0,
          "value": "746871487847202816"
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
          "value": "14"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": \"746871487847202816\",\n  \"executeTime\": 14\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-27 19:40:19",
  "createdAt": "2022-10-27 19:22:55",
  "createdBy": "",
  "updatedBy": "",
  "id": "c4671dfeb0254045bf0c9a74e2936d0e"
}
================================*/

if (body.tenantId) {
  const pathCount = await db.table('sys_tenant').logic().where().eq('tenantId', body.tenantId).ne(not_null(body.id), 'id', body.id).count();
  if (pathCount > 0) {
    exit(400, '租户已存在');
  }
}

return await db.table("sys_tenant").primary("id").withBlank().saveOrUpdate(body);