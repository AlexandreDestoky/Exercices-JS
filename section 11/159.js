"use strict";

let notes = [4, 6, 8, 6, 15, 16, 4, 18, 3, 9, 17, 17, 15];

console.log(notes.includes(19));

// Teste si au moins 1 élément passe le test 
console.log(notes.some(x => x > 15));
console.log(notes.some(x => x > 25));
console.log(notes.some(x => x < 4));
console.log("--------------------------");

// Teste si touts les élements passe le test
console.log(notes.every(x => x > 2));
console.log(notes.every(x => x > 5));
console.log(notes.every(x => x > 2 && x < 19));