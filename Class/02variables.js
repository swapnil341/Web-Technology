// ================================
// Difference between var, let, const
// ================================

// var:
//  - var is the old way to declare variables
//  - It has function scope and can be redeclared
var a = 10;
var a = 20;             // allowed
console.log(`a = ${a}`);

// let:
//  - let is used to declare variables with block scope
//  - It cannot be redeclared in the same block
let b = 30;
// let b = 40;          // not allowed
b = 40;                 
console.log(`b = ${b}`);

// const:
//  - const is used to declare constant values
//  - Its value cannot be changed once assigned
const c = 50;
// c = 60;              // not allowed
console.log(`c = ${c}`);



// ================================
// Types of Data in JavaScript
// ================================

// Primitive Data Types
// These store single values

let num = 100;          // number
let str = "js";     // string
let isPassed = true;   // boolean
let x;                 // undefined
let emptyValue = null; // null

// Non-Primitive Data Types
// These store multiple values

let arr = [1, 2, 3];           // array
let obj = { name: "Swapnil" }; // object
let func = function() {};      // function



// ================================
// Variable Declaration & typeof
// ================================

// Checking the type of each variable using typeof

console.log(num + " :" + typeof num);        // number
console.log(str + " :" + typeof str);        // string
console.log(isPassed + " :" + typeof isPassed);   // boolean
console.log(x + " :" + typeof x);          // undefined
console.log(emptyValue + " :" + typeof emptyValue); // object (this is a JS bug)

console.log(arr + " :" + typeof arr);  // object
console.log(obj + " :" + typeof obj);  // object
console.log("function : " + typeof func); // function

// ================================
// Difference between null and undefined
// ================================

// undefined:
// A variable is undefined when it is declared but not assigned a value
let u;
console.log(u); // undefined

// null:
// null means no value is assigned intentionally
let n = null;
console.log(n); // null
