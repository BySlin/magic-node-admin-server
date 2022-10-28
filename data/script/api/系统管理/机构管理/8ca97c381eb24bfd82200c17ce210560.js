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
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-28 23:33:37",
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
  const parentDept = await db.table('sys_dept').where().eq("id", body.parentId).selectOne();
  if (body.parentId === body.id) {
    exit(400, '父节点不可选择自身!');
  }
  body.tenantId = parentDept.tenantId;
  body.ancestors = parentDept.ancestors + ',' + body.parentId;
}

return await db.table("sys_dept").primary("id").withBlank().saveOrUpdate(body);
