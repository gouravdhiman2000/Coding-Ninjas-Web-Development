var arr= [1,2,3,4,5];
console.log(arr);  

var arr1= new Array(1,2,3,4,5);
console.log(arr1);  

console.log(arr1[6]);  
arr1[2]=90;
console.log(arr1);  

arr1[7]=100;
console.log(arr1);  

console.log(arr1.length);  

// empty array
var arr3= new Array();

// 2- defines the size of an array
var arr4 = new Array(2);
console.log(arr4.length);

// elements of the array
var arr5 = new Array(2,3);
console.log(arr5);

// heterogenous array
var arr6 = ["abc",10,true,20];
console.log(arr6);