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


// for (const el of personnage) {
//   console.log(el);
// }

personnage.presentation();
