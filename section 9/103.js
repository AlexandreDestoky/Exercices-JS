"use strict";

//---------- Déstructuration Objet en variables ----------
// Tableau
const tab = [2, 3, 4];

//Méthode grand mère
const a = tab[0];
const b = tab[1];
const c = tab[2];
// console.log(a,b,c);

// Méthode moderne
const [e, f, g] = tab;
// console.log(e,f,g);



//---------- Inverser des variables ----------
let prenom = "Jean";
let nom = "Dupont";

//Méthode grand mère
// let temp = prenom;
// prenom = nom;
// nom = temp;
// console.log(prenom,nom);

// Méthode moderne
[prenom,nom] = [nom,prenom];
console.log(prenom,nom);


