"use strict";


const personne = {
  nom:"Destoky",
  prenom:"Alexandre",
  age:24
}

//Pas besoin de respecter ordre, nom de variable match avec la propriété de l'objet
const {age,prenom,nom} = personne;
console.log(age);

// Changement du nom de variable
const {prenom : monPrenom, nom: monNom, age : monAge} = personne;
console.log(monPrenom);