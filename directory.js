//Making a directory

//Making a directory async

var fs = require ("fs");

if (fs.existsSync("lib")){
    console.log ("Directory is already there !!");
}

else{
fs.mkdir("lib",function(err){
    if (err){
        console.log(err);
    }
    else{
        console.log("Successfully made directory!!");
    }
});
}
