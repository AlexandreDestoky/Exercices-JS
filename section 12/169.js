"use strict";

console.log(Math.sqrt(25));

console.log(9 ** 2);

console.log(Math.max(5, 8, 12, 4, 6));
console.log(Math.min(5, 8, 12, 4, 6));

console.log(3.1415926535897932384626433 - Math.PI);

console.log(Math.floor(Math.random() * 11)); //9.99

const randomMinMax = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomMinMax(4,6));  


console.log((2.7).toFixed(2));
console.log((2.7).toFixed(0));
console.log((2.3).toFixed(0));