var arr = [4,5,6,7,8];
arr.push(10);
console.log(arr);

arr.pop();
console.log(arr);

// left shift
arr.shift(1);
console.log(arr);

// right shift
arr.unshift(4);
console.log(arr);

// splice function- startind index, deletion count, elements to be inserted or deleted
var arr2 = [9,8,7,6,5,4];
arr2.splice(1,1);
console.log(arr2);

arr2.splice(2);//delete all the elements from the index-2
console.log(arr2);

// insertion in array
arr2.splice(2,0,10);
// at index-2 10 will be inserted
console.log(arr2);

// insertion and deletion at same time
arr2.splice(1,2,30,40,50);
console.log(arr2);
