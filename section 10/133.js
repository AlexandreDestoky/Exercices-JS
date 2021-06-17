"use strict";
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





// const salut = function() {
//   console.log("Salutions !");
// }

let para = document.createElement("button");
para.textContent = "test";
document.body.append(para);

let btn = document.querySelector("button");


btn.addEventListener("click", attaque.bind(magicien,140,"Yoda"));


const magicienVSYoda = attaque.bind(magicien,140);


magicienVSYoda("Yoda")