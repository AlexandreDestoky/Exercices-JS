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


const value = Object.values(personnage);
// console.log(value);

const entre = Object.entries(personnage);
// console.log(entre);

for (const [i,el] of entre) {
  console.log(`A la propriété ${i} correspond ${el}`);
}

const heureOuverture = {
  mon : {
    open: "7",
    close : "19"
  },
  tue : {
    open: "8",
    close : "19"
  },
  wed : {
    open: "6",
    close : "19"
  },
  fri : {
    open: "7",
    close : "20"
  }
}

for (const [i,{close,open : ouverture}] of Object.entries(heureOuverture)) {
  console.log(`Le ${i}, le magasin ouvre à ${ouverture} et ferme à ${close}`);
}