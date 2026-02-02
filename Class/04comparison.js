// == (Equal to → checks only value)
console.log(`5 == "5" : ${5 == "5"}`);
// true → because values are same after type conversion

// === (Strict Equal to → checks value and type)
console.log(`5 === "5" : ${5 === "5"}`);
// false → because number and string are different types

// != (Not Equal to → checks only value)
console.log(`10 != "10" : ${10 != "10"}`);
// false → values are equal after conversion

// !== (Strict Not Equal to)
console.log(`10 !== "10" : ${10 !== "10"}`);
// true → because data types are different

// > (Greater than)
console.log(`8 > 5 : ${8 > 5}`);
// true → 8 is greater than 5

// < (Less than)
console.log(`3 < 7 : ${3 < 7}`);
// true → 3 is smaller than 7

// >= (Greater than or Equal to)
console.log(`6 >= 6 : ${6 >= 6}`);
// true → both values are equal

// <= (Less than or Equal to)
console.log(`4 <= 2 : ${4 <= 2}`);
// false → 4 is greater than 2



// ================================
// Comparison with different types
// ================================

console.log(`"10" > 5 : ${"10" > 5}`);
// true → "10" is converted to number 10

console.log(`"2" > "15" : ${"2" > "15"}`);
// true → string comparison is alphabetical



// ================================
// null and undefined comparison
// ================================

console.log(`null == undefined : ${null == undefined}`);
// true → JS treats them equal in loose comparison

console.log(`null === undefined : ${null === undefined}`);
// false → different data types

console.log(`null > 0 : ${null > 0}`);
// false → null becomes 0, and 0 is not greater than 0

console.log(`null == 0 : ${null == 0}`);
// false → null is only equal to undefined

console.log(`undefined > 0 : ${undefined > 0}`);
// false → undefined becomes NaN



// ================================
// Boolean comparison
// ================================

console.log(`true == 1 : ${true == 1}`);
// true → true is converted to 1

console.log(`false == 0 : ${false == 0}`);
// true → false is converted to 0

console.log(`true === 1 : ${true === 1}`);
// false → different data types
