const path=require("path");

console.log("Current file",__filename);
console.log("Current dire",path.dirname(__filename))
console.log("extension",path.extname(__filename))
console.log("basename",path.basename(__filename))
const joinedPath=path.join(__dirname,"test","test.txt")
console.log("joined path",joinedPath)
const resolvedPath=path.resolve(__dirname,"test","test.txt")
console.log("resolved path",resolvedPath)