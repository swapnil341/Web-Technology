// ================================
// Date and Time in JavaScript
// ================================

// Why Date & Time methods are used:
// They are used to get current date and time
// Helpful for logging, tracking events, and showing time to users

// Creating a Date object
let now = new Date();
console.log(`Current Date & Time : ${now}`);



// ================================
// Getting Date Values
// ================================

console.log(`Year : ${now.getFullYear()}`);
// Used to show current year

console.log(`Month : ${now.getMonth() + 1}`);
// Months start from 0, so we add 1

console.log(`Date : ${now.getDate()}`);
// Gives day of the month

console.log(`Day : ${now.getDay()}`);
// Gives day number (0 = Sunday)

console.log(`Hours : ${now.getHours()}`);
// Used to show current hour

console.log(`Minutes : ${now.getMinutes()}`);
// Used in clocks and timers

console.log(`Seconds : ${now.getSeconds()}`);
// Used for real-time updates



// ================================
// Setting Date Values
// ================================

// Used to modify date and time
now.setFullYear(2026);
now.setMonth(0); // January
now.setDate(15);

console.log(`Updated Date : ${now}`);



// ================================
// Date Formatting Methods
// ================================

console.log(`toDateString() : ${now.toDateString()}`);
// Used to show readable date

console.log(`toTimeString() : ${now.toTimeString()}`);
// Used to show readable time

console.log(`toLocaleString() : ${now.toLocaleString()}`);
// Used to show date and time based on location



// ================================
// Timestamps
// ================================

// Timestamp = number of milliseconds since 1 Jan 1970 (UTC)
// Used to calculate time difference accurately

let timeStampNow = Date.now();
console.log(`Current Timestamp : ${timeStampNow}`);

// Creating date from timestamp
let dateFromTimestamp = new Date(timeStampNow);
console.log(`Date from Timestamp : ${dateFromTimestamp}`);



// ================================
// Timestamp Example
// ================================

// Example: Checking how much time passed
let startTime = Date.now();

// Some task simulation
for (let i = 0; i < 1000000; i++) {}

let endTime = Date.now();
console.log(`Time Taken (ms) : ${endTime - startTime}`);

// Used in:
// • Performance checking
// • Session timeout
// • Login/logout tracking



// ================================
// Comparing Dates
// ================================

let date1 = new Date("2025-01-01");
let date2 = new Date("2026-01-01");

console.log(`date1 < date2 : ${date1 < date2}`);
// true because timestamp of date1 is smaller

