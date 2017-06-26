//CREATING A JSON SERVER

var http = require ("http");
var data = require ("./inventory");

http.createServer(function(req,res){
    
    if (req.url==="/"){   
    res.writeHead(200,{"Content-Type":"test/json"});
    res.end (JSON.stringify(data));
    }
    
    else if (req.url === "/instock"){
        listInStock(res);
    }
    
    else if (req.url === "/onorder"){
        listOnBackOrder(res);
    }
    
    else {
        res.writeHead(404,{"Content-Type": "text/plain"});
        
    }
    
}).listen(process.env.PORT, process.env.IP);

console.log ("Server listening on port node-dev");


//function for including items on stock
function listInStock(res){
    var inStock = data.filter(function(item){
        return item.avail === "In stock";
    });
    
    res.end (JSON.stringify(inStock));
}

//function for including item out of stock
function listOnBackOrder(res){
     var onOrder = data.filter(function(item){
        return item.avail === "On back order";
    });
    res.end (JSON.stringify(onOrder));
    
}