"use strict";

const domicile =  {
  village : "Compogne",
  commune : "Bertogne",
  rue : "Vivrou"
}

const personnage = {
  identifiant : {
    prenom : "Alexandre",
    nom :"Destoky"
  },
  age : 24,
  domicile,
  presentation() {
    console.log(`Bonjour, je m'appelle ${this.identifiant.prenom} ${this.identifiant.nom}`);
  }
}

// console.log(personnage?.mesure?.taille?.cm);



let age = 19;

// console.log(age >= 18 ? "Majeur":"Mineur");

const personnes = [
  {prenom:"Alexandre",nom:"Destoky"},
  {prenom:"Marc",nom:"Andre"}
]

console.log(personnes[1]?.nom ? personnes[1].nom : "Erreur");
console.log(personnes[2]?.nom ?? "Erreur");


let compte;


if(compte === true) {
  console.log(compte);
} else {
  console.log("Il faut vous faire un compte");
}

console.log(compte ? compte : "Il faut vous faire un compte");

console.log(compte?? "Il faut vous faire un compte");