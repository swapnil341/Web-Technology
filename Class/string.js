// String interpolation
// Defination: Embedding variables or expressions within a string using template literals.
// This is good for string concatenation and dynamic content generation.
const str2 = `Hello ${str1}`;
console.log(str2);


// Why we use new Keyword with String
//  - In js the new keyword with String() is used to explicitly create 
//    a String object instead of a primitive string value.

const string = new String("Swapnil");
console.log(string);
console.log(string.length);
console.log(string[3]);
console.log(string.toLowerCase());
console.log(string.toUpperCase());
console.log(string.charAt(6));
console.log(string.indexOf("n"));
console.log(typeof(string));

const str = "    str   ";
console.log(str.length);
const trimmedString = str.trim();
console.log(trimmedString);
console.log(trimmedString.length);


//********* String methods *********

// 1. slice()
const slicedString = string.slice(0, 5);
console.log(slicedString);

// 2. substring()
const substring = string.substring(0, 5);
console.log(substring);

// 3. replace()
const replacedString = trimmedString.replace("ab", "abcdef");
console.log(replacedString);

// 4. includes()
const includesResult = string.includes("cd");
console.log(includesResult);

// 5. split()
const splitString = string.split("c");
console.log(splitString);

// 6. repeat()
const repeatString = string.repeat(2);
console.log(repeatString);

// 7. concat()
const concatString = string.concat(" new string");
console.log(concatString);

// 8. toString()
const num = 123;
const numToString = num.toString();
console.log(numToString);
console.log(typeof (numToString));

// 9. padStart()
const paddedStartString = string.padStart(5, "*");
console.log(paddedStartString);

// 10. padEnd()
const paddedEndString = string.padEnd(15, "*");
console.log(paddedEndString);

// 11. charCodeAt()
const charCode = string.charCodeAt(0);
console.log(charCode);

// 12. lastIndexOf()
const lastIndex = string.lastIndexOf("c");
console.log(lastIndex);

// 13. toLowerCase()
const lowerCaseString = string.toLowerCase();
console.log(lowerCaseString);

// 14. toUpperCase()
const upperCaseString = string.toUpperCase();
console.log(upperCaseString);

// 15. search()
const searchIndex = string.search("ed");
console.log(searchIndex);