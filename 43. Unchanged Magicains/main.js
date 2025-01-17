"use strict";
// Array of variable magicians
const magicians = ["Mahnoor Waris", "Hina Naseer", "Imran Khan", "Bilal"];
// Function to create a copy of an array
function copyArray(arr) {
    return [...arr];
}
// Function to add "the Great" to each magician's array
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Function to display magicians array
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Create a copy of the original magicians array
const copiedMagicians = copyArray(magicians);
// Call make_great() with the copied array
make_great(copiedMagicians);
// Display the original magicians array
console.log("Original Magicians:");
show_magicians(magicians);
// Display the modified magicians array
console.log("\nModified Magicians:");
show_magicians(copiedMagicians);
