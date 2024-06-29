// function declaration
/*function fact(n){
    var ans = 1;
    for(var i = 1;i<=n;i++){
        ans = ans * i;
    }
    return ans;
}
  console.log(fact(5));  
*/

// function expression - hoisting does not place in it
// named function expression
var factorial = function fact(n){
    //doing recursion
    if(n == 0){
        return 1;
    }
    return n * fact(n-1);

    /*var ans = 1;
    for(var i = 1;i<=n;i++){
        ans = ans * i;
    }
    return ans;*/
};//semi-colon to terminate the value
//console.log(factorial);//this indicate the value of the fxn.
//console.log(factorial(5));

// anonymous function expression - func. does not have a name
var factorial2 = function (n){
    var ans = 1;
    for(var i = 1;i<=n;i++){
        ans = ans * i;
    }
    return ans;
};
console.log(factorial);
console.log(factorial2);