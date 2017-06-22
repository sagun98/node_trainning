var waitTime = 3000; 
var currentTime = 0; 
var intervalTime = 100; 
var percentWaited = 0 ; 

function writeWaiting(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

var interval = setInterval(function(){
    currentTime +=intervalTime;
    percentWaited = Math.floor((currentTime/waitTime)*100);
    process.stdout.write (`${percentWaited}`);
    writeWaiting(percentWaited);
    //console.log (percentWaited);
},intervalTime);

setTimeout(function(){
    clearInterval(interval);
    writeWaiting(100);
    console.log("DONE");
    
},waitTime);

process.stdout.write ('\n\n');
writeWaiting(percentWaited);