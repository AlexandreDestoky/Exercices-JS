"use strict";

//---------- Déstructuration ----------
const tab = [4, 5, 6];

// Méthode grand mère
const tous = [1, 2, 3, tab[0], tab[1], tab[2], 7, 8, 9];
// console.log(tous);

//Méthode moderne (spread opérator)
const tous2 = [1, 2, 3, ...tab, 7, 8, 9];
// console.log(tous2);

//---------- Exercices------------------

let somme = function (nombres) {
  let total = 0;
  for (const nombre of nombres) {
    total += nombre;
  }
  return total;
};

// console.log(somme(tous2));

// let x = 2;
// console.log("x vaut : " + x);

// let y = x;
// console.log("y vaut : " + y);

// console.log("changement y = 4");
// y = 4;
// console.log("y vaut : " + y);
// console.log("x vaut : " + x);

// console.log("changement x = 3");
// x = 3;
// console.log("y vaut : " + y);
// console.log("x vaut : " + x);

// -----------------------------------------------------------------------------


// const tabPrenom = ["Jean","Pierre","Andre","Marc","Luc"];
// console.log(tabPrenom[1]);

// const tabPrenom2 = tabPrenom;
// const tabPrenom3 = [...tabPrenom,"Louis"]; // Spread Opérator
// console.log(tabPrenom2[1]);

// console.log("------------");
// tabPrenom[1] = "Patrick";
// console.log(tabPrenom);
// console.log(tabPrenom2);
// console.log(tabPrenom3);

// console.log("---------------");
// tabPrenom2[4] = "Benoit";
// console.log(tabPrenom);
// console.log(tabPrenom2);
// console.log(tabPrenom3);

// ----------------------------------------------------------------------------------

// const prenom = "Alexandre";
// //["A","l","e","x","a","n","d","r","e"];

// let tabPrenom = [];
// for (const lettre of prenom) {
//   tabPrenom.push(lettre);
// }
// let tabPrenom2 = [...prenom];

// console.log(tabPrenom);
// console.log(tabPrenom2);



// --------------------------------------------------------------------------------

const presentation = function (prenom,nom,age,sexe) {
  console.log(`Bonjour, je m'appelle ${prenom} ${nom}, je suis un${sexe[0].toUpperCase() === "H"?"":"e"} ${sexe} de ${age}ans`);
}

presentation("alexandre","destoky",24,"homme");

let personnage = ["Alexandre","Destoky",24,"Homme"];
presentation(...personnage);