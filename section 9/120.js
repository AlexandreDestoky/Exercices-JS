"use strict";

const prenom = "Alexandre";

console.log(prenom[2]);
console.log(prenom.indexOf("e"));
console.log(prenom.lastIndexOf("e"));
console.log(prenom.indexOf("xan"));

console.log(prenom.slice(2,5));
console.log(prenom.slice(-2));
console.log(prenom);

console.log("------------------------");

const siegeMilieu = function(siege) {
  let nbr = siege.slice(-1).toUpperCase();
  return nbr === "B" || nbr === "E";
  
}

console.log(siegeMilieu("1E"));
