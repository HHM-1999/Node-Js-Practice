const fs = require('node:fs');


/// syncronous ////
fs.writeFileSync('myFile.txt','Welcome to My New File')
fs.appendFileSync('myFile.txt','     Follow More')

const data= fs.readFileSync('myFile.txt');
console.log(data);
console.log(data.toString());


//Asyncronous///

fs.readFile('myFile.txt',(err,data)=>{
    console.log(data.toString());
})
console.log('hello here');



