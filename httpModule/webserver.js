var http = require("http");

var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello World");
});

server.listen(3000);
console.log ("Server is listening in port 3000");