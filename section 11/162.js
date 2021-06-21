"use strict";

let chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chiffres);

let x = new Array(7);
console.log(x);
x.fill(0);
console.log(x);

x.fill(5,3,5);
console.log(x);

const t = Array.from("Test");
console.log(t);