const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write("Hi Guys!!")
        res.write("Server is perfectly running")
        res.end();
    }else if(req.url=='/aboutUs'){
        res.write('This is About Us Page')
        res.end()
    }
    else{
        res.write('not found')
        res.end()
    }


}).listen(5000);

console.log("Server is Going on....")