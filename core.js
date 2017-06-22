var path = require ('path');
var util = require ('util');

util.log (dirUploads);
util.log (v8.getHeapStatistics());

console.log (path.basename (__filename));


var dirUploads = path.join(__dirname,'www','files','uploads');

console.log(dirUploads);