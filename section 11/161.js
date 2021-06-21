"use strict";

const tabPrenom = ["Jean", "Benoit", "Bruno", "Andre", "Pierre", "Alexandre", "Patrick", "Luc"];
console.log(tabPrenom);
console.log(tabPrenom.sort());

const notes = [4, 5, 6, 18, 15, 19, 16, 14, 13, 134, 15, 18];
console.log(notes);
console.log(notes.sort());
console.log(notes.sort((a, b) => a - b));
