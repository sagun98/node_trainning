var saying = [
    "This is line 1",
    "This is line 2",
    "This is line 3",
    "This is line 4",
    "This is line 5",
    "This is line 6",
    "This is line 7",
    "This is line 8"
    ];
    
var interval = setInterval(function(){
    var i = Math.floor(Math.random()*saying.length);
    process.stdout.write(`${saying[i]} \n`);
},1000);

process.stdin.on('data',function(data){
    console.log (`STDIN DATA RECIEVED -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});
