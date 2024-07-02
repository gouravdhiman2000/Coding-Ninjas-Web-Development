
"use strict";
// throw errors 
// can be used inside the function

var box = document.getElementById( 'box');

var clickCount = document.getElementById('click-count');

var count = 0;

box.addEventListener('click',function(){
    // "use strict";
    count++;
    // demo = 100;
    console.log(count);
    clickCount.innerText = count + " ";
});

