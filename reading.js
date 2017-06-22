//Reading Files

//Reading files sync

/*
var fs = require("fs");

var contents = fs.readFileSync("file.txt","UTF-8");

console.log(contents);
*/





/*
//Reading files async
var fs = require("fs");

var contents = fs.readFile("file.txt","UTF-8",function(err,contents){
    if (err){
        console.log(err);
    }
    console.log(contents);    
});
*/




//Reading dir

var path = require("path");
var fs = require("fs");

fs.readdir("./lib",function(err,files){
    
    files.forEach(function(fileName){
        var file = path.join(__dirname,"lib",fileName);
        var stats = fs.statSync(file);
        if (stats.isFile() && fileName !== ".DS_Store"){
            fs.readFile(file,"UTF-8",function(err,contents){
                console.log (contents);
                });
        }
    })
});