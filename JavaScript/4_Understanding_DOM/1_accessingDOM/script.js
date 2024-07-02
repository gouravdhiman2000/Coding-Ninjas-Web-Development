
function sayhello(){
    alert('Hello G!');
}

function sayBye(){
    alert('Bye!');
}

var helloButton2 = document.getElementById('btn2');
helloButton2.addEventListener('click',sayhello);
helloButton2.addEventListener('click',sayBye);