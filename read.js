const xlsx = require('xlsx');

let workSheets = xlsx.readFile('./OrnekDosya.xlsx');

let sheet1 = workSheets.Sheets['Sheet1'];
let sheet2 = workSheets.Sheets['Sheet2'];

let sheet1ToJson = xlsx.utils.sheet_to_json(sheet1);
let sheet2ToJson = xlsx.utils.sheet_to_json(sheet2);

console.log('Sheet - 1: ', sheet1ToJson);
console.log('Sheet - 2: ', sheet2ToJson);