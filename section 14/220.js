"use strict";

class Compte {
  constructor(proprietaire, devise, code) {
    this.proprietaire = proprietaire;
    this.devise = devise;
    this._code = code;
    this._mouvements = [];
  }
  ajout(montant) {
    this._mouvements.push(montant)
  }
  retrait(montant) {
    this.ajout(-montant);
  }
  getCode() {
    return this._code;
  }
  getMouvements() {
    return this._mouvements;
  }
}

const compte1 = new Compte("Alexandre", "EUR", 5432);
compte1.ajout(500);
compte1.ajout(800);
compte1.retrait(400);

console.log(compte1._mouvements);
compte1._mouvements.push(200);
console.log(compte1._mouvements);


