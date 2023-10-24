const path = require('path')
const myPath = 'D:/nodejs-Project/Project-1/index.js'
console.log(path.basename(myPath));


console.log(path.dirname(myPath))
console.log(path.parse(myPath))
console.log(path.extname(myPath))
///=======Delimiter use======= /////
console.log(process.env.PATH);
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

process.env.PATH.split(path.delimiter);
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
process.env.PATH.split(path.delimiter)
console.log(path.format(myPath))

