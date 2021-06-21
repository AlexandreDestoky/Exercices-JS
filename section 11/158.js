"use strict";


const notes = [4,5,6,8,13,4,5,26,28,20];

const x = notes.find(x => x > 10);
console.log(x);

const y = notes.findIndex(x => x > 10);
console.log(y);

console.log(notes.findIndex(x => x === 5));