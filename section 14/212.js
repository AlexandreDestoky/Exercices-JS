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
    // console.log(2021 - this.age);
    return 2021 - this.age;
  }
  presentation() {
    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et je suis né en ${this.anneeNaissance()} `);
  }
  // getters
  getAge() {
    return this.age;
  }

  static salut() {
    console.log("Salut 🤗");
  }
}



const alexandre = new Person("Destoky", "Alexandre", 24);
// alexandre.presentation();

Person.salut();
// alexandre.salut();