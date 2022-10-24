/*================================
{
  "type": "function",
  "isFolder": false,
  "method": "Fn",
  "fileName": "数组转Tree",
  "path": "/arrToTree",
  "description": "",
  "groupId": "7201a7bda3714abebc9f6680287aa099",
  "fileLock": false,
  "enabled": true,
  "returnType": "Array",
  "definition": {
    "parameters": [
      {
        "description": "数组",
        "expression": "",
        "key": "arr",
        "dataType": "Array",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      },
      {
        "description": "父级ID",
        "expression": "",
        "key": "parentId",
        "dataType": "Object",
        "required": false,
        "error": "",
        "validateType": 0,
        "value": ""
      }
    ]
  },
  "updatedAt": "2022-10-24 21:03:31",
  "createdAt": "2022-10-24 19:55:53",
  "createdBy": "",
  "updatedBy": "",
  "id": "8e14bb8dfc4746b795ddc4b2be19f3b9"
}
================================*/
const arrToTree = await importFunction('/utils/tree/arrToTree');

const newArr = [];
for (const item of arr) {
  //比较父级id
  if (item.parentId === parentId) {
    const children = await arrToTree(arr, item.id);
    newArr.push({
      ...item,
      children
    });
  }
}

return newArr.length === 0 ? undefined : newArr;