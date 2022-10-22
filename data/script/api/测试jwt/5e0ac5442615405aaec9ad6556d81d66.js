/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "测试jwt",
  "path": "/testjwt",
  "description": "",
  "groupId": "890e1e52195040d0b3f8d05898d5c05e",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [],
    "options": [],
    "paths": [],
    "headers": [],
    "responseBodyDefinition": {
      "responseType": "json",
      "headers": [
        {
          "key": "connection",
          "value": "keep-alive",
          "description": ""
        },
        {
          "key": "content-length",
          "value": "251",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 22 Oct 2022 07:00:49 GMT",
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
          "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ0ZTY2MTg5MmI2NTQ2ZjJhNTU4OGQ1ODBmNjc5MDRjIiwiaWF0IjoxNjY2NDIyMDQ5LCJleHAiOjE2NjY1OTQ4NDl9.-HUbi5tMFd_jW3iBPqbmuQc1OiVNIcrnizKTgkN32R4"
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
          "value": "2"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ0ZTY2MTg5MmI2NTQ2ZjJhNTU4OGQ1ODBmNjc5MDRjIiwiaWF0IjoxNjY2NDIyMDQ5LCJleHAiOjE2NjY1OTQ4NDl9.-HUbi5tMFd_jW3iBPqbmuQc1OiVNIcrnizKTgkN32R4\",\n  \"executeTime\": 2\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-10-22 15:00:49",
  "createdAt": "2022-10-22 14:59:09",
  "createdBy": "",
  "updatedBy": "",
  "id": "5e0ac5442615405aaec9ad6556d81d66"
}
================================*/
const jwtService = await importModule('jwtService');
const token = await jwtService.sign({
  id: uuid()
});
return token;