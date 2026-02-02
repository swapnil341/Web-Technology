// ================================
// Number Methods
// ================================

// Number() method
// Used to convert other data types into number
let str = "123";
console.log(`Number("123") : ${Number(str)}`);
// Used when input comes as string (like form input)

// toFixed()
// Used to limit decimal points
let price = 99.5678;
console.log(`price.toFixed(2) : ${price.toFixed(2)}`);
// Used in shopping apps to show price properly

// parseInt()
// Used to convert string to integer
console.log(`parseInt("45.9") : ${parseInt("45.9")}`);
// Used when only whole number is needed

// parseFloat()
// Used to convert string to decimal number
console.log(`parseFloat("45.9") : ${parseFloat("45.9")}`);
// Used in calculations with decimal values

// isNaN()
// Used to check whether value is Not a Number
console.log(`isNaN("abc") : ${isNaN("abc")}`);
// Used for validation in forms



// ================================
// Math Methods
// ================================

// Math.round()
// Rounds number to nearest integer
console.log(`Math.round(4.6) : ${Math.round(4.6)}`);
// Used when approximate value is enough

// Math.floor()
// Returns lowest integer value
console.log(`Math.floor(4.9) : ${Math.floor(4.9)}`);
// Used in pagination and indexing

// Math.ceil()
// Returns highest integer value
console.log(`Math.ceil(4.1) : ${Math.ceil(4.1)}`);

// Math.max()
// Returns maximum value
console.log(`Math.max(3, 7, 1) : ${Math.max(3, 7, 1)}`);
// Used to find highest score or price

// Math.min()
// Returns minimum value
console.log(`Math.min(3, 7, 1) : ${Math.min(3, 7, 1)}`);
// Used to find lowest score or discount

// Math.sqrt()
// Returns square root
console.log(`Math.sqrt(16) : ${Math.sqrt(16)}`);
// Used in mathematical calculations



// ================================
// Math.random()
// ================================

// Math.random()
// Generates random number between 0 and 1
console.log(`Math.random() : ${Math.random()}`);

// Why we use Math.random():
// To generate unpredictable values
// Helps in security, games, and simulations

// Generate random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(`Random number (1-10) : ${randomNum}`);



// ================================
// Real-Time / Company-Level Usage
// ================================

// 1. OTP Generation (Banking Apps)
// Used to generate random OTP for user verification

// 2. Online Games
// Used to shuffle cards, dice roll, or enemy movement

// 3. E-commerce Websites
// Used to show random product recommendations

// 4. Load Balancing (Companies)
// Used to randomly distribute users to servers

// 5. A/B Testing
// Used by companies to randomly show different UI versions
