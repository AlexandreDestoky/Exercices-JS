"use strict";

// const personnage = {
//   prenom: "Alexandre",
//   nom: "Destoky",
//   age: 24,
//   presentation(salutations) {
//     console.log(`${salutations} ${this.prenom} ${this.nom}, Comment allez-vous ?`);
//   },
// };

// personnage.presentation("Bonjour");
// personnage.presentation("Bienvenue");

// const magicien = {
//   nom:"Gandalf",
//   age:115,
//   dommage : [],
//   attaque(degats,ennemi) {
//     console.log(`${this.nom} à infligé ${degats} dommage à ${ennemi}`);
//     this.dommage.push({degats,ennemi});
//   }
// }

// console.log(magicien.dommage);
// magicien.attaque(150,"Sauron")
// console.log(magicien.dommage);

// const attaque = magicien.attaque;
// attaque.call(magicien,23,"Voldemort");

// const archer = {
//   nom:"Legolas",
//   age:215,
//   dommage : [],
// }

const magicien = {
  nom: "Gandalf",
  age: 115,
  dommage: [],
};
const archer = {
  nom: "Legolas",
  age: 215,
  dommage: [],
};

const attaque = function (degats, ennemi) {
  console.log(`${this.nom} à infligé ${degats} dommage à ${ennemi}`);
  this.dommage.push({ degats, ennemi });
};

console.log(magicien.dommage);
console.log(archer.dommage);


// attaque.call(magicien,240,"Sarouman");
// console.log(magicien.dommage);
// console.log(archer.dommage);

// attaque.call(magicien,130,"JOKER");
// console.log(magicien.dommage);
// console.log(archer.dommage);

attaque.call(archer,110,"Dark Vador");
console.log(magicien.dommage);
console.log(archer.dommage);

attaque.apply(archer,[90,"Bouffon Vert"]);
console.log(magicien.dommage);
console.log(archer.dommage);


const tabPerso = [70,"Yoda"];

attaque.apply(magicien,tabPerso);
console.log(magicien.dommage);
console.log(archer.dommage);

attaque.call(archer,...tabPerso);
console.log(magicien.dommage);
console.log(archer.dommage);
