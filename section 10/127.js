"use strict";

const calculTva = function (montant, tva = 0.21) {
  return montant * (1 + tva);
};

console.log(calculTva(400, 6 / 100));

const presentation = function (sexe = "Mr", nom) {
  console.log(sexe + " " + nom);
};

presentation(undefined, "Dupont");
