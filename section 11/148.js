"use strict";

// let points = [7, 4, 5, 9, 10, 2, 3, 4, 4, 5, 8];

// let points20 = [];

// for (const point of points) {
//   points20.push(point * 2);
// }


// let pointsSur20 = points.map(x => x * 2);


// console.log(points20);
// console.log(pointsSur20);

let tva = 1.21;

let montant = [7, 4, 5, 9, 10, 2, 3, 4, 4, 5, 8];

// const convTva = montant.map(x => x*1.21);
// console.log(convTva);

// const convTva2 = montant.map(function(el) {
//   return el * tva;
// })
// console.log(convTva2);

montant.forEach(function(el) {
  console.log(el);
})

montant.forEach(x => console.log(x));