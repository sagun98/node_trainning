//EXPORTING CUSTOM MODULES

// Handling events with eventEmitter

var Person = require("./lib/person");


var ben = new Person("Ben Franklin");
var neo = new Person("Neo Frank");

neo.on ('speak',function(said){
    console.log(`${this.name}:${said}`);
});

ben.on('speak',function(said){
    console.log (`${this.name}:${said}`);
});

ben.emit('speak', "You may delay, but time will not");
neo.emit('speak',"This is awesome");