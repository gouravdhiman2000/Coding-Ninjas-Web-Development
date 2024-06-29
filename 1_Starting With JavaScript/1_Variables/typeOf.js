var a= 1/0;
console.log(a);

var a=-1/0;
console.log(a);

var a= Math.pow(10,2);
console.log(a);

var a= Math.pow(10,1000);
console.log(a);

// max value in js
var a= Number.MAX_VALUE;
console.log(a);

// NaN
var a=Math.sqrt(-1);
console.log(a);

var a=parseInt("aaaa");
console.log(a);

// typeOf
var a=10;
console.log(typeof a);//number

var a= true;
console.log(typeof a);//boolean

var a = "aaa";
console.log(typeof a);//string

var b;
console.log(typeof b);//undefined

var c = null;
console.log(typeof c);//object(it is a bug)

var c = NaN;
console.log(typeof c);//number

var c = Infinity;
console.log(typeof c);//number
