// ================================
// Data Type Conversions in JavaScript
// ================================

// String to Number
// Converting string value into number

let strNum = "123";
let num1 = Number(strNum); // converts string to number
console.log(num1);
console.log(typeof num1);

// Another way using parseInt
let num2 = parseInt("45");
console.log(num2);
console.log(typeof num2);

// String with text gives NaN
let invalidNum = Number("123abc");
console.log(invalidNum);            // NaN (Not a Number)



// ================================
// Number to String
// ================================

// Converting number into string

let number = 100;
let str1 = String(number);         // converts number to string
console.log(str1);
console.log(typeof str1);

// Another way using toString
let str2 = number.toString();
console.log(str2);
console.log(typeof str2);



// ================================
// Boolean Conversions
// ================================

// Converting number to boolean
// 0 becomes false, other numbers become true

console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(10));       // true

// Converting string to boolean
// Empty string is false, non-empty string is true

console.log(Boolean(""));       // false
console.log(Boolean("Hello"));  // true



// ================================
// Other Possible Conversions
// ================================

// Boolean to Number
// true becomes 1 and false becomes 0

console.log(Number(true));      // 1
console.log(Number(false));     // 0

// null conversions
console.log(Number(null));       // 0
console.log(Boolean(null));     // false
console.log(String(null));      // "null"

// undefined conversions
console.log(Number(undefined));      // NaN
console.log(Boolean(undefined));    // false
console.log(String(undefined));     // "undefined"


