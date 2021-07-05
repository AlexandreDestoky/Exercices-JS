"use strict";

class Compte {
  constructor(proprietaire, devise, code) {
    this.proprietaire = proprietaire;
    this.devise = devise;
    this.code = code;
    this.mouvements = [];
  }
  ajout(montant) {
    this.mouvements.push(montant)
  }
  retrait(montant) {
    this.ajout(-montant);
  }
}

const compte1 = new Compte("Alexandre", "EUR", 5432);
compte1.ajout(500);
compte1.ajout(800);
compte1.retrait(400);

console.log(compte1.mouvements);
compte1.mouvements.push(200);
console.log(compte1.mouvements);


