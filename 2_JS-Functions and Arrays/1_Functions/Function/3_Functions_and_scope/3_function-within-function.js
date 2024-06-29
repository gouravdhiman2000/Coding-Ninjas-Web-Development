
// function outer(){
//     var outerVar=10;
//     function inner(){
//         console.log(outVar);
//     }
//     inner();
// }
// // inner();
// outer();

var name = "global_scope";

function outer(){
    var name ="outer_scope";
    var outerVar=10;
    function inner(){
        var name = "inner_scope";
        console.log(name);
    }
    inner();
    console.log(name);
}
outer();
console.log(name);
