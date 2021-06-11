"use strict";

const personnage = {
  prenom:"Alexandre",
  nom:"Destoky",
  // age:24
}

// Méthode grand mère
const monAge = personnage.age ? personnage.age : "Pas d'âge précisé";
console.log(monAge);

// Nullish Coalescing
const monAge2 = personnage.age ?? "Pas d'âge précisé";
console.log(monAge2);