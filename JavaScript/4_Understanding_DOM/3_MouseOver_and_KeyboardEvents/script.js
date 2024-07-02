var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('mouseover',function(){
    console.log("Mouse Over Event");
});


outerDiv.addEventListener('mouseout',function(){
    console.log("Mouse Out Event");
});


var searchInput = document.getElementById('search');
searchInput.addEventListener('keypress',function(){
    console.log("Keypress Event ")
});

document.addEventListener('keydown',function(event){
    console.log("Key Down Event", event.keyCode);
});
// to know which key is pressed write event in function and write in console - event.keycode


// document.addEventListener('keyup',function(){
//     console.log("Key Up Event");
// });