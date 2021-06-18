"use strict";

// const tabNombres = [200, 450, -25, 3000, -650, 130, 425, -24];

// for (const nombre of tabNombres) {
//   if(nombre>0) {
//     console.log(`Nombre Positif de : ${nombre}`);
//   } else {
//     console.log(`Nombre Négatif de : ${Math.abs(nombre)}`);
//   }
// }

// // for (const nombre of tabNombres) console.log(`Nombre ${nombre > 0 ? `Positif de : ${nombre}` : `Négatif de : ${Math.abs(nombre)}`}`);

// tabNombres.forEach(function(nombre){
//   if(nombre>0) {
//     console.log(`Nombre Positif de : ${nombre}`);
//   } else {
//     console.log(`Nombre Négatif de : ${Math.abs(nombre)}`);
//   }
// })

// console.log("-----------------------------");

// let prenom ="alexandre";

// for (const lettre of prenom) {
//   console.log(lettre);
// }

// prenom.forEach(function(lettre){
//   console.log(lettre);
// })

const tabNombres = [200, 450, -25, 3000, -650, 130, 425, -24];

console.log("------FOR OF------");
for (const [index, nombre] of tabNombres.entries()) {
  console.log(`Nombre N°${index + 1} : ${nombre}`);
}


console.log("------FOR EACH------");
tabNombres.forEach(function(nombre,i,arr) {
  console.log(`Nombre N°${i + 1} : ${nombre}`);
})