"use strict";

class Person {
  constructor(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.famille;
  }
  anneeNaissance() {
    return 2021 - this.age;
  }
  presentation() {
    console.log(`Bonjour, je m'appelle ${this.prenom} ${this.nom} et je suis né en ${this.anneeNaissance()} `);
  }
  salut() {
    console.log("Salut 🤗");
  }
}

class Student extends Person{
  constructor(nom,prenom,age,cours) {
    super(nom,prenom,age);
    this.cours = cours;
  }
  salut() {
    console.log("Salut dans sous-classe");
  }
}


const jona = new Student("Bastogne","Jonathan",23,"Sport");
jona.presentation();
jona.salut();