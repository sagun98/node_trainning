// CREATING A NEW FILE
var fs = require ("fs");

var md = `
Samle 
=========================

Sample subtitle
-------------------------

* point
* point
* point

`;
fs.writeFile("sample.md",md.trim(),function(err){
    
   console.log ("file created"); 
});



//APPENDING A FILE  
fs.appendFile("sample.md","\nappend string");