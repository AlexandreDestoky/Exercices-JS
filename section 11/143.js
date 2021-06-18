"use strict";

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function(el,i,arr) {
  console.log(`${i} : ${el}`);
})

const currenciesUnique = new Set(["USD","EUR","GBP","USD","YEN","EUR"]);
console.log(currenciesUnique);


currenciesUnique.forEach(function(el,_,i){
  console.log(`${i} : ${el}`);
})