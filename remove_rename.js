//RENAMING A FILE

var fs= require("fs");

//Sycn version
fs.renameSync("./lib/file.txt","./lib/filegg.txt");
console.log ("Config renamed the file.txt");



//Async version
fs.rename("./lib/filegg.txt","./lib/nofile.txt",function(err){
    if (err){
        console.log(err);
    }
    else {
        console.log("Files are renamed async");
    }
    
})




//REMOVING A FILE

//Sycn version
var fs = require("fs");

try{
    fs.unlinkSync("./lib/test.txt");
}
catch (err){
    console.log(err);
}



//Async version
var fs = require("fs");
fs.unlink("./lib/test.txt",function(err)
{   
    if (err){
    console.log(err);
    }
    
    else {
        console.log("Node Files has been sucessfully removed");
    }
});