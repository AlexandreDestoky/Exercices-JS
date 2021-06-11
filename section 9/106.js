"use strict";

// spread operator
let miniTab = [5, 6, 7];
let tab = [1, 2, 3, 4, ...miniTab, 8, 9];
console.log(tab);

// Rest Pattern
const [un, deux, ...reste] = [1, 2, 3, 4, 5];
console.log(un, deux, reste);


const somme = function(...nombres) {
  let total = 0;
  for(const nombre of nombres) {
    total+=nombre;
  }
  return total;
}

console.log(somme(4,8,12,47,86,52,34));

const reservation = function (premier,...reste) {
  return `Votre commande pour ${premier} et ${reste.length} autres articles à été expédiée`;
}


console.log(reservation("casque Bluetooth","Chaussures","Armoire","table"));