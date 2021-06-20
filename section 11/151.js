"use strict";

const notes = [7, 5, 18, 16, 14, 15, 20, 8];

console.log(notes.reduce(((total, x) => total += x),5));


const total = notes.reduce(function(acc,req,i,arr) {
  console.log(`Itération N°${i} : ${acc}`);
  return acc * req;
},4)

console.log(total);

// let total = 0;


// // FOR EACH MODERNE
// notes.forEach(x => total += x);

// // FOR EACH GRAND MERE
// notes.forEach(function(x) {
//   total += x;
// })
// // FOR OF
// for (const note of notes) {
//   total += note;
// }

// console.log(total);