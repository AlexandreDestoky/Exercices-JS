"use strict";

const augmentation = function () {
  let cpt = 0;
  return function () {
    cpt++;
    console.log(cpt);
  };
};

let compteur1 = augmentation();
let compteur2 = augmentation();
compteur1();
compteur1();

compteur2();
compteur2();
compteur2();
compteur2();

compteur1();
compteur1();
compteur1();
compteur1();

compteur2();

compteur2();
// let multiplicateur = 7;

// const double = function (nbr) {
//   // const multiplicateur = 2;
//   return nbr * multiplicateur;
// };

// const triple = function (nbr) {
//   const multiplicateur = 3;
//   return nbr * multiplicateur;
// };

// console.log(multiplicateur);
// console.log(double(18));
