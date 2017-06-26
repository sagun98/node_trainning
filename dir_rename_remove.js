// REMOVING AND MOVING DIRECTORIES

var fs = require("fs");


// Moving the logs directory
fs.renameSync("./assets/logs",".logs");
console.log ("Directory has been moved successfully!!");


// Removing the directory ASYNC 

fs.rmdir ("./assets", function(err){
    if(err){
        throw err;
    }
        console.log ("Successfully Removed the directory");
});


//Recursively delete a directory (First delete all the files inside the directory)

fs.readdirSync("./logs").forEach(function(fileName){
    fs.unlinkSync("./logs/"+fileName);
});

