"use strict";

// let tabPrenoms = ["Jean","Benoit","Marc","Luc","Patrick","Andre"];
// console.log(tabPrenoms);
// console.log(tabPrenoms.slice(2,5));
// console.log(tabPrenoms);

// let b = (tabPrenoms.splice(-1));
// console.log(tabPrenoms);

// console.log(tabPrenoms.slice(2));
// console.log(tabPrenoms.slice(-1));
// console.log(tabPrenoms.slice(tabPrenoms.length-1,tabPrenoms.length)); //Méthode grand mère

// let tabMamy = tabPrenoms;
// let tabSpread = [...tabPrenoms];
// let tabSlice = tabPrenoms.slice();

// tabSpread[0] = "Alexandre";

// console.log(tabPrenoms);
// console.log(tabMamy);
// console.log(tabSpread);
// console.log(tabSlice);


let tabPrenoms = ["Jean","Benoit","Marc","Luc","Patrick","Andre"];

const inversion = function(tab){
  for (let mot in tab) {
    tab[mot] = tab[mot].toLowerCase().split("").reverse().join("");
    tab[mot] = tab[mot].slice(0,1).toUpperCase() + tab[mot].slice(1);
  }
}

inversion(tabPrenoms);
console.log(tabPrenoms);


