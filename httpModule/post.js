//COLLECTING POST DATA WITH THE NODE SERVER

var http = require ("http");
var fs = require("fs");

http.createServer(function(req,res){
    
    if (req.method === "GET"){
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.createReadStream("./form.html","UTF-8").pipe(res);
    }
    
    else if (req.method === "POST"){
        var body = "";
        req.on ("data",function(chunk){
            body+=chunk;
        });
        
        req.on ("end",function(){
            res.writeHead(200,{"Content-Type": "text/html"});
            
            res.end(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title> Result</title>
                </head>
                <body><p>${body}</p></body>
            </html>
            `);
        });
        
    }
}).listen(process.env.PORT, process.env.IP);

console.log ("Server is up and running.");