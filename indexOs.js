const os = require('node:os');
const { CLIENT_RENEG_LIMIT } = require('node:tls');


console.log(os.platform())
console.log(os.homedir())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.uptime())
console.log(os.release())
