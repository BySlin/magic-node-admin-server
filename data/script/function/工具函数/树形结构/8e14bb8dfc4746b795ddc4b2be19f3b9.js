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
  "returnType": "Object",
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
  "updatedAt": "2022-10-24 20:17:46",
  "createdAt": "2022-10-24 19:55:53",
  "createdBy": "",
  "updatedBy": "",
  "id": "8e14bb8dfc4746b795ddc4b2be19f3b9"
}
================================*/
const arrToTree = await importFunction('/utils/tree/arrToTree');

const newArr = [];
arr.forEach(async item => {
  if (item.parentId === parentId) {
    const children = (await arrToTree(arr, item.id)) || [];

    newArr.push({
      ...item,
      children
    })
  }
});
return newArr;