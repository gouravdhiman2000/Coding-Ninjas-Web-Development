

var innerDiv = document.getElementById('inner');

innerDiv.addEventListener('click',function(event){
    console.log('Click-Inner Div');
    event.stopPropagation();
});
// to stop (event bubbling)the propagation pass event as an argument in the function and write event.stopPropagation();


var outerDiv = document.getElementById('outer');

outerDiv.addEventListener('click',function(event){
    console.log('Click-Outer Div');
    event.stopPropagation();
});


document.addEventListener('click',function(){
    console.log('Click-Document');
});