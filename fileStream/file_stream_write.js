// READABLE FILE SREAM (READS A FILE IN A NUMBE ROF CHUNKS)

var fs = require ("fs");
var stream = fs.createWriteStream("chat.log");

stream.write("The line that is going to be written");

stream.write("Another line");