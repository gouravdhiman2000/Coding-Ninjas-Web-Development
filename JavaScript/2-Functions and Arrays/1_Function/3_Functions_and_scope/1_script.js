// global scope
// var name= "scope";
// console.log(name);

// // fucntion scope- var is available within the fuction
// function scopeDemo(){
//     var i=10;
//     console.log(i);
// }
// scopeDemo();
// console.log(i);//accessing globally - i is not defined - because it is declared within the funtion

var name ="global_scope";

function scopeDemo(){
    var name = "Function_scope";
    console.log(name);
}
scopeDemo();
console.log(name);