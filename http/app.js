const http=require('http');
const fs=require('fs');
const path=require('path');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/data"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("<h1>HTMML RESPONESE</h1>")
    }else if(url==="/json"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({name:"John",age:30}))
    }else if(url==="/text"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("This is a text response")

    }  else if (url === "/script.js") {
        fs.readFile(path.join(__dirname, "fetch.js"), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error loading script");
            } else {
                res.writeHead(200, { "Content-Type": "application/javascript" });
                res.end(data);
            }
        });
    }else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>404 NOT FOUND</h1>")
    } 
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})