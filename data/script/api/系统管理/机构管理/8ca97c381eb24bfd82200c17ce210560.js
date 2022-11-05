/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "POST",
  "fileName": "保存机构",
  "path": "/save",
  "description": "",
  "groupId": "e65076e23083465b8aec7b3b8803fd7f",
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
          "key": "tenantId",
          "required": false,
          "validateType": 0,
          "value": "000000"
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
          "dataType": "Number",
          "description": "",
          "error": "",
          "expression": "",
          "key": "deptCategory",
          "required": true,
          "validateType": 0,
          "value": "1"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "deptName",
          "required": true,
          "validateType": 0,
          "value": "测试"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "fullName",
          "required": true,
          "validateType": 0,
          "value": "测试公司"
        },
        {
          "children": [],
          "dataType": "String",
          "description": "",
          "error": "",
          "expression": "",
          "key": "ancestors",
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
          "required": true,
          "validateType": 0,
          "value": "0"
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
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\r\n  \"id\": \"\",\r\n  \"tenantId\": \"000000\",\r\n  \"parentId\": \"0\",\r\n  \"deptCategory\": 1,\r\n  \"deptName\": \"测试\",\r\n  \"fullName\": \"测试公司\",\r\n  \"ancestors\": \"\",\r\n  \"sort\": 0,\r\n  \"remark\": \"\"\r\n}",
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
          "value": "Sat, 29 Oct 2022 06:58:54 GMT",
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
          "value": "748179393636990976"
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
          "value": "71"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": \"748179393636990976\",\n  \"executeTime\": 71\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-05 21:20:31",
  "createdAt": "2022-10-27 19:21:48",
  "createdBy": "",
  "updatedBy": "",
  "id": "8ca97c381eb24bfd82200c17ce210560"
}
================================*/
if (is_empty(body.parentId)) {
  body.parentId = "0";
  body.tenantId = ctx.user.tenantId;
}
if (body.parentId !== '0') {
  const parentDept = await db.table('sys_dept').logic().where().eq("id", body.parentId).selectOne();
  if (is_null(parentDept)) {
    exit(400, '父节点不存在');
  }
  if (body.parentId === body.id) {
    exit(400, '父节点不可选择自身!');
  }
  body.tenantId = parentDept.tenantId;
  body.ancestors = parentDept.ancestors + ',' + body.parentId;
}

return await db.table("sys_dept").primary("id").withBlank().saveOrUpdate(body);
