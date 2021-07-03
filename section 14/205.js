"use strict";
// Convention majuscule pour constructeur

// Méthode grand mère
const Person = function (nom, prenom, age) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
};

const moi = new Person("Destoky", "Alexandre", 24);
const moi2 = new Person("Destoky", "Alex", 25);

console.log(moi);
console.log(moi2);