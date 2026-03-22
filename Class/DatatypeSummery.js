/* 
JavaScript Datatypes 
 - JS data types determine the nature of data stored in variables, affecting
   how values are processed and interacted with in the code.
 - JS data types are categorized into Primitive and Non-Primitive types
        # Primitive type
          * Number Type
            - Number
            - bigint
          * Non-Numeric Type
            - String
            - Boolean
            - Null
            - Undefined
            - Symbol
        # Non_primitive Type
          - object
          - Array
          - function
          - Data object
          - regular expression

*/

// Number :- includes both integers and floating-point numbers.
console.log("Number Data Type");

console.log("10");
let no1 = 10;
console.log(typeof(no1));

console.log("3.14");
const PI = 3.14;
console.log(typeof(PI))

console.log("Infinity");
let no2 = Infinity;
console.log(no2);

console.log("hii / 2");
let no3 = 'hii' / 2;
console.log(no3);
console.log(typeof(no3));

// String :- String is a series of character that are surrounded by quotes.
// there are 3 types of quotes in JS '', "", ``
console.log("String Data Type");

let str1 = "Double quotes";
console.log(str1);

let str2 = 'Single quotes'
console.log(str2);

let str3 = `Backticks ${str1}`;
console.log(str3);

// there is no difference between 'singe' and "double" quotes in JS
// Backticks `` provide extra functionality as with their help of them we can embed variables inside them.


//Boolean :- boolean has only two values true and false
console.log("Boolean")

let flag1 = true;
console.log(flag1);

let flag2 = false;
console.log(flag2);


// Null :- it is the special value does not belong to any of the default data types 
console.log("Null");

let age = null;
console.log(age);

// it defines a special value that represents nothing or empty value


// Undefined :- a variable that has been declared but not initialized with a value is 
// automatically assigned the undefined value. It means the variable exists, but it has no value assigned to it

let a;
console.log(a);

// Bigint :- BigInt is a built-in object that provides a way to represent whole numbers greater than 2^53

let b = BigInt("0b101010101010");
console.log(b);


//Non-Primitive Data Types
// - data types that are derived from primitive data types are known as  non-primitive data types.
// - it is also known as derived data types or reference data types.

//Object Data Type 
// - JavaScript objects are key-value pairs used to store data, create with {} or the  new keyword.
console.log("Object Data Type");

let student = {
    fullName : "Swapnil Bhosale",
    rollNo : 101
}

console.log(student.fullName);


//Arrays Data Type
// - An Array is a special kind of object used to store an ordered collection of values,which can be of any 
// data type.
console.log("Array Data Type");

let arr1 = [1,2,3,4,5];
console.log(arr1);

let arr2 = [1,"two",{age:50},arr1];
console.log(arr2);


//Function Data Type
// - A function in JS is a block of reusable code which performs a specific task when called.

console.log("Function ");

function greet(user){
    console.log("Hello ",user);
}

greet("Ram");


//Date Object
// - The Date Object in JS is used to work with dates and times, allowing for date creation, 
// manipulation and formatting.
console.log("Date Object");

let currDate = new Date();
console.log(currDate);


//Regular Expression 
// - A RegExp in JS is an object used to define search patterns for matching text in string.
console.log("Regular Expression");

let pattern = /hello/;

let res = pattern.test("Hello, World!");
console.log(res);