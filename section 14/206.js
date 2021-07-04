"use strict";
const Person = function (nom, prenom, age) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
};

Person.prototype.calcAge = function() {
  console.log(2021 - this.age);
}

const moi = new Person("Destoky", "Alexandre", 24);

// moi.age.calcAge()