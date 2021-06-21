"use strict";

let tab = [[1, 2, 3], [4, [5, 6]], 7, 8];

// console.log(tab);
// console.log(tab.flat());
// console.log(tab);

// console.log("----------------------");

// let tab2 = tab.flat();
// console.log(tab2);
// tab2[7] = 42;
// console.log(tab);

// console.log("----------------------");

// let tab3 = tab.flat(2);
// console.log(tab3);

console.log("----------------------");

// let essence = [50, [5, 32], 15, 62, 25, [10, 26], 45, [17, 25]];

// let test = essence.map(x => (typeof x === "object" ? x.reduce((a, b) => a + b) : x));
// console.log(test);

let prenom = ["Jean","Andre","Pierre Paul","Luc Benoit","Marc"];

let prenomSepare = prenom.map(x => x.split(" "));
console.log(prenomSepare);
let prenomSepareFlat = prenomSepare.flat();
console.log(prenomSepareFlat);

let prenomFlatMap = prenom.flatMap(x => x.split(" "));
console.log(prenomFlatMap);