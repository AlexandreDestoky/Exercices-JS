"use strict";

class Person {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.famille;
  }
  // Methods
  anneeNaissance() {
    console.log(2021 - this.age);
    return 2021 - this.age;
  }
  presentation() {
    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et je suis né en ${this.anneeNaissance()} `);
  }
  // getters
  getAge() {
    return this.age;
  }
  // setters
  set nom(el) {
    this._nom = el;
    this._famille = el === "Destoky";
  }

  get nom() {
    return this._nom;
  }
}

const alexandre = new Person("Destoky", "Alexandre", 24);
// alexandre.anneeNaissance();
// alexandre.presentation();
console.log(alexandre.age);
console.log(alexandre.getAge());
// alexandre.setNom("Destoky");
console.log(alexandre._nom);
console.log(alexandre.famille);

console.log(alexandre);
