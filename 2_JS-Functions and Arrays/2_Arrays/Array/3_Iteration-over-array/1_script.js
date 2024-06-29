var arr = [1,2,3,4,5,6,7];

for ( var i=0;i<=arr.length;i++){
    console.log(arr[i]);
}

// for each function
function print(element,index){
    console.log(element,index);
}
arr.forEach(print);