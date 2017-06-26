var WebSocketServer = require ("ws").Server;
var wss = new WebSocketServer({port: process.env.PORT});

wss.on("connection",function(ws){
    ws.send("Welcome to the chat");
});

console.log("WS server is running");