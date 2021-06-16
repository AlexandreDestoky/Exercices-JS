"use strict";

// const presentation = function (salutations) {
//   return function (nom) {
//     console.log(`${salutations} ${nom}`);
//   };
// };

const presentation = salutations=> nom=> console.log(`${salutations} ${nom}`) 





let fctBonjour = presentation("Bonjour");
let fctAurevoir = presentation("Aurevoir");
console.log(fctBonjour);

fctBonjour("Patrick");
fctAurevoir("Benoit");


const presen = function (salutations,nom) {
    console.log(`${salutations} ${nom}`);
};

presen("Aurevoir","Jean");

