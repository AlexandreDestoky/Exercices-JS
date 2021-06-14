"use strict";

let identifiant = "Alexandre Destoky";
let [prenom,nom] = identifiant.split(" ");
console.log(prenom);

const masquage = function(nbr) {
  nbr = nbr + "";
  let fin = nbr.slice(-4);
  // console.log(fin);
  console.log(nbr.length);
  return fin.padStart(nbr.length,"-");
}

console.log(masquage(542654514514));