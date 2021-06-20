"use strict";

const notes = [4,5,6,8,13,4,5,26,28,20];

const x = notes.find(x => x > 10);

console.log(x);

const perso = [
  {
    prenom:"Gandalf",
    age: 114
  },
  {
    prenom:"Gimli",
    age: 80
  },
  {
    prenom:"Legolas",
    age: 300
  },
]

const vieux = perso.find(x => x.age > 200);
console.log(vieux);