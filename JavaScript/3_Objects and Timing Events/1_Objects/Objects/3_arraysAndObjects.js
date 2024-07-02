var arr = [10,20,30,40,50];

// array is also key value pair here keys ate it indexes

console.log(arr);
console.log(arr["0"]);

var obj ={
    "0":10,
    "1":20,
    "2":30,
    "4":40,
}
console.log(obj);

console.log(obj.length);//undefined
console.log(arr.length);

arr[6]="abbb";
console.log(arr);

console.log(arr.length);



obj.prop1="demo";
console.log(obj);

// array length does not change
arr.prop1 =" demo";
console.log(arr);
console.log(arr.length);


// iterating over array
for(var i in arr){
    console.log(i);
}
