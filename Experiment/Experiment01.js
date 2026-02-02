// const variable
const PI = 3.14;
// var 
var userName = "Swapnil";
// let
let branch = "AIML";

// Scope 
let a = 10
var b = 20
{
    let a = 200
    var b = 300
    console.log(a, b)
}
console.log(a, b)
// var will change all the values that are present in code 
// var update value from the scope
// that will cause a big problem 
// let is block-scoped (changes stay inside {}), while var is function/global-scoped (changes affect outside the block).


//Variable declaration
let no = 1006;           //Number
let userName = "Ram";    //String
let t;                   //Undefined
let c = null;           //null
let flag = true;        //Boolean
console.log(no, userName, t, c, flag);



//type of variable
console.log(typeof(no));
console.log(typeof(userName));
console.log(typeof(t));
console.log(typeof(c));  
console.log(typeof(flag));

//Display Student info
let studName = "Swapnil";
let email = "swapnil@gmail.com"
let rollNo = 301;
let age = 21;

console.log("Name :", studName)
console.log("Email :", email)
console.log("Roll No :", rollNo)
console.log("Age :", age)


//Odd- Even Number Check
let num1 = 100

if (num1 % 2 == 0) {
    console.log(num1, "is even Number");
}
else {
    console.log(num1, "is odd number");
}

//Display number using loop
let arr1 = [91, 68, 53, 11, 7]
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

//Check student pass or fail
let marks = 75;
if (marks > 40) {
    console.log("Pass");
}
else {
    console.log("Fail");
}