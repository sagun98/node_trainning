var ws = new WebSocket("ws://https://node-trainning-sagun98.c9users.io/");

ws.onopen = function(){
    setTitle("Connected to Cyber chat");
};

ws.onclose=function(){
    setTitle("Disconnected");
};

ws.onmessage= function(payload){
    printMessage(payload.data);
};

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
