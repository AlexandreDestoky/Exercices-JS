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
    return this;
  }
  retrait(montant) {
    this.ajout(-montant);
    return this;
  }
  getCode() {
    return this._code;
  }
  getMouvements() {
    return this._mouvements;
  }
}

const compte1 = new Compte("Alexandre", "EUR", 5432);
compte1.ajout(500).ajout(300).retrait(200);
console.log(compte1);
