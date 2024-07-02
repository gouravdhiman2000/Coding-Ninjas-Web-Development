var student ={
    // key value pairs
    name : "Gourav",
    rollno : "11717461",
    marks :"90"
};

console.log(student);
console.log(student.marks);
 
student.marks = 95;
console.log(student.marks);

//property which is not defined
console.log(student.sem);//undefined

student.sem = 4;
console.log(student.sem);


// square bracket notatio  is used when the property is not valid


// delete=ing properties


delete student.marks;
console.log(student);


var obj1 = {
    p :"10"
}
 var obj2 = obj1;

 console.log(obj2);


//  iterating over objects

//gives only the property
for(var prop in student){
    console.log(prop);
}

// gives property name with there values
for(var prop in student){
    console.log(prop,student[prop]);
}

var keys = Object.keys(student);
console.log(keys);

var keys1 = Object.getOwnPropertyNames(student);
console.log(keys1);


