const { log } = require('console');
const os=require('os');

console.log("Platform",os.platform());
console.log("Architecture",os.arch());
console.log("Total memory",os.totalmem());
console.log("Free m,em",os.freemem());
console.log(os.hostname());
console.log("os.n",os.networkInterfaces());
console.log("os.type",os.type());
console.log(os.cpus());
console.log(os.uptime());
console.log(os.release());
console.log(os.userInfo());
console.log(os.tmpdir());
console.log(os.endianness());
