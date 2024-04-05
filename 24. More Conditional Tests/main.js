"use strict";
// Equality Inequality Test With Strings
console.log("Equality test with strings:", "Imran Khan" === "Imran Khan");
console.log("Inequality test with strings:", "Imran Khan" !== "Nawaz Sharif");
// Testing Using Lowercase Function
console.log("Lowercase function test:", "HAMMAD JANJUA RAJPUT".toLowerCase() === "hammad janjua rajput");
// Numerical Tests (Inequality , greater than and equals to, less than and equals to)
console.log("Equality test with numbers:", 1000 === 1000); //equality
console.log("Inequality test with numbers:", 10 !== 9); //inequality
console.log("Greater than test:", 10000 > 5000); //greater than
console.log("Less than test:", 5000 < 100000); //less than
console.log("Greater than or equal to test:", 10 >= 10); //greater than or equal to
console.log("Less than or equal to test:", 5 <= 10); //less than or equal to
// Tests of "and" and "or" Operators
console.log("And operator test:", true && true);
console.log("Or operator test:", true || false);
// Test whether an item is in an Array
const cars = ["Porsche", "Ford", "BMW"];
console.log("Test 'Porsche' in the array:", cars.includes("Porsche")); //  Include ka Array Func use kiya he.
// Test whether an item is not in an array
console.log("Testing 'Honda' is not in array:", !cars.includes("Honda")); //  Answere true and chahiye.
