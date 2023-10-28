const fs = require('fs');
const ourReadFile = fs.createReadStream(`${__dirname}/BigText.txt`);

// console.log(ourReadFile)

ourReadFile.on('data', (chunk) => {
    console.log(chunk)
})