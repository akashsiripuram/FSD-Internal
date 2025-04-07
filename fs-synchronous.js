const fs=require("fs");

fs.writeFileSync("1.txt","This is a test file created by fs module in Node.js");
console.log("File created successfully");

const data=fs.readFileSync("1.txt","utf-8");

console.log("File data:",data);

fs.appendFileSync("1.txt","This is a test file created by fs module in Node.js");
console.log("File updated successfully");
