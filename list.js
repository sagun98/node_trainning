// All other asyn cmd will be blocked by this sync call. Mainly used for the configs !!

/*
var fs = require ("fs");
var files = fs.readdirSync('./lib');

console.log(files);
*/



// 
var fs = require ("fs");
var files = fs.readdir('./lib',function(err,files){
    if (err){
        throw err;
    }
    console.log(files);
});

console.log("Reading files");