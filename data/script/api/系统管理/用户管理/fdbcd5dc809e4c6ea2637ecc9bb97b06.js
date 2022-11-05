/*================================
{
  "type": "api",
  "isFolder": false,
  "method": "GET",
  "fileName": "列表查询",
  "path": "/list",
  "description": "",
  "groupId": "54d7b65487a3419c8cad96b4e7120d46",
  "fileLock": false,
  "enabled": true,
  "definition": {
    "parameters": [
      {
        "description": "",
        "expression": "",
        "key": "current",
        "dataType": "Number",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "0"
      },
      {
        "description": "",
        "expression": "",
        "key": "pageSize",
        "dataType": "Number",
        "required": true,
        "error": "",
        "validateType": 0,
        "value": "20"
      },
      {
        "description": "",
        "expression": "",
        "key": "tenantId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "username",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "deptId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "realname",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "roleId",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "",
        "expression": "",
        "key": "nickname",
        "dataType": "String",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ],
    "options": [],
    "paths": [],
    "headers": [],
    "requestBodyDefinition": {
      "requestType": "json",
      "children": [],
      "dataType": "",
      "description": "",
      "error": "",
      "expression": "",
      "json": "",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    },
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
          "value": "1381",
          "description": ""
        },
        {
          "key": "content-type",
          "value": "application/json; charset=utf-8",
          "description": ""
        },
        {
          "key": "date",
          "value": "Sat, 05 Nov 2022 14:27:11 GMT",
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
              "key": "total",
              "required": false,
              "validateType": 0,
              "value": "3"
            },
            {
              "children": [
                {
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
                      "value": "743789983910854656"
                    },
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
                      "value": "{bcrypt}$2a$10$QsVO2LZvjWjPkOsZciVHbO9PvPoVZD1gr5BI2.o4a3AWRFBX19ktq"
                    },
                    {
                      "children": [],
                      "dataType": "Object",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "realname",
                      "required": false,
                      "validateType": 0,
                      "value": ""
                    },
                    {
                      "children": [],
                      "dataType": "Object",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "nickname",
                      "required": false,
                      "validateType": 0,
                      "value": ""
                    },
                    {
                      "children": [],
                      "dataType": "Object",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "avator",
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
                      "dataType": "Number",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "enabled",
                      "required": false,
                      "validateType": 0,
                      "value": "1"
                    },
                    {
                      "children": [],
                      "dataType": "Number",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "deleted",
                      "required": false,
                      "validateType": 0,
                      "value": "0"
                    },
                    {
                      "children": [],
                      "dataType": "Object",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "createdBy",
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
                      "key": "updatedBy",
                      "required": false,
                      "validateType": 0,
                      "value": "743789983910854656"
                    },
                    {
                      "children": [],
                      "dataType": "String",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "createdAt",
                      "required": false,
                      "validateType": 0,
                      "value": "2022-10-23T05:37:55.000Z"
                    },
                    {
                      "children": [],
                      "dataType": "String",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "updatedAt",
                      "required": false,
                      "validateType": 0,
                      "value": "2022-11-04T13:56:55.000Z"
                    },
                    {
                      "children": [],
                      "dataType": "String",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "roleId",
                      "required": false,
                      "validateType": 0,
                      "value": "1123598816738675201"
                    },
                    {
                      "children": [],
                      "dataType": "String",
                      "description": "",
                      "error": "",
                      "expression": "",
                      "key": "deptId",
                      "required": false,
                      "validateType": 0,
                      "value": "1123598813738675201"
                    }
                  ],
                  "dataType": "Object",
                  "description": "",
                  "error": "",
                  "expression": "",
                  "key": "-",
                  "required": false,
                  "validateType": 0,
                  "value": ""
                }
              ],
              "dataType": "Array",
              "description": "",
              "error": "",
              "expression": "",
              "key": "list",
              "required": false,
              "validateType": 0,
              "value": ""
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
          "value": "9"
        }
      ],
      "dataType": "Object",
      "description": "",
      "error": "",
      "expression": "",
      "json": "{\n  \"code\": \"200\",\n  \"success\": true,\n  \"message\": \"OK\",\n  \"data\": {\n    \"total\": 3,\n    \"list\": [\n      {\n        \"id\": \"743789983910854656\",\n        \"username\": \"admin\",\n        \"password\": \"{bcrypt}$2a$10$QsVO2LZvjWjPkOsZciVHbO9PvPoVZD1gr5BI2.o4a3AWRFBX19ktq\",\n        \"realname\": null,\n        \"nickname\": null,\n        \"avator\": null,\n        \"tenantId\": \"000000\",\n        \"enabled\": 1,\n        \"deleted\": 0,\n        \"createdBy\": null,\n        \"updatedBy\": \"743789983910854656\",\n        \"createdAt\": \"2022-10-23T05:37:55.000Z\",\n        \"updatedAt\": \"2022-11-04T13:56:55.000Z\",\n        \"roleId\": \"1123598816738675201\",\n        \"deptId\": \"1123598813738675201\"\n      },\n      {\n        \"id\": \"752042257804165120\",\n        \"username\": \"test\",\n        \"password\": \"{bcrypt}$2a$10$Zlq8bDWI4sh1XAupyyXbkemoSWC9oayGdEnrg0gBG3d8C0uxITEH2\",\n        \"realname\": null,\n        \"nickname\": null,\n        \"avator\": null,\n        \"tenantId\": \"000000\",\n        \"enabled\": 1,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": \"743789983910854656\",\n        \"createdAt\": \"2022-11-03T14:53:43.000Z\",\n        \"updatedAt\": \"2022-11-05T13:34:07.000Z\",\n        \"roleId\": \"748206733620412416,752754659172548608\",\n        \"deptId\": \"748179393636990976,748179393636990976\"\n      },\n      {\n        \"id\": \"752520938813128704\",\n        \"username\": \"test11\",\n        \"password\": \"{bcrypt}$2a$10$fDf2Z16XnRJkuBHPiCP7reVUrQavhYiRrNQH10IpkAjnAIrl0BtdO\",\n        \"realname\": null,\n        \"nickname\": null,\n        \"avator\": null,\n        \"tenantId\": \"000000\",\n        \"enabled\": 1,\n        \"deleted\": 0,\n        \"createdBy\": \"743789983910854656\",\n        \"updatedBy\": \"743789983910854656\",\n        \"createdAt\": \"2022-11-04T06:44:46.000Z\",\n        \"updatedAt\": \"2022-11-04T07:17:41.000Z\",\n        \"roleId\": \"748206733620412416\",\n        \"deptId\": \"748179393636990976\"\n      }\n    ]\n  },\n  \"executeTime\": 9\n}",
      "key": "",
      "required": false,
      "validateType": 0,
      "value": ""
    }
  },
  "returnType": "",
  "updatedAt": "2022-11-05 22:50:14",
  "createdAt": "2022-11-03 20:03:26",
  "createdBy": "",
  "updatedBy": "",
  "id": "fdbcd5dc809e4c6ea2637ecc9bb97b06"
}
================================*/
const checkSuperAdminTenantId = await importFunction('/auth/checkSuperAdminTenantId');

const tenantId = ctx.user.tenantId;

return await db.page(`
SELECT
	u.*,
	GROUP_CONCAT( ur.roleId SEPARATOR ',' ) AS roleId,
	GROUP_CONCAT( ud.deptId SEPARATOR ',' ) AS deptId 
FROM
	sys_user AS u
	LEFT JOIN sys_user_role AS ur ON u.id = ur.userId
	LEFT JOIN sys_user_dept AS ud ON u.id = ud.userId 
WHERE
  u.deleted = 0
  <if test="tenantId != null">
    and u.tenantId = #{tenantId}
  </if>
  <if test="username != null">
    and u.username like #{username}
  </if>
  <if test="nickname != null">
    and u.nickname like #{nickname}
  </if>
  <if test="realname != null">
    and u.realname like #{realname}
  </if>
  <if test="deptIds != null and deptIds.length > 0">
    and u.id in ( SELECT userId FROM sys_user_dept WHERE deptId IN
    <foreach item='item' index='index' collection='deptIds' open="(" separator="," close=")">
        #{item}
    </foreach>
    )
  </if>
  <if test="roleIds != null and roleIds.length > 0">
    and u.id in ( SELECT userId FROM sys_user_role WHERE roleId IN
      <foreach item='item' index='index' collection='roleIds' open="(" separator="," close=")">
          #{item}
      </foreach>
    )
  </if>
GROUP BY
	u.id 
ORDER BY
	u.createdAt ASC
`,
  query.pageSize, query.current,
  {
    //管理员租户才能筛选租户
    tenantId: ((await checkSuperAdminTenantId(tenantId)) && not_blank(query.tenantId)) ? query.tenantId : undefined,
    username: not_blank(query.username) ? `%${query.username}%` : undefined,
    realname: not_blank(query.realname) ? `%${query.realname}%` : undefined,
    nickname: not_blank(query.nickname) ? `%${query.nickname}%` : undefined,
    deptIds: not_blank(query.deptId) ? query.deptId.split(',') : [],
    roleIds: not_blank(query.roleId) ? query.roleId.split(',') : [],
  });