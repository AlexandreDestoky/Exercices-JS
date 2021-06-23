"use strict";

console.log(23 === 23.0);
console.log(23 === 23.5);

console.log(0.1 + 0.2); //0.30000000000000000004 <= PAS CORRECT
console.log(0.1 + 0.2 === 0.3); // PAS NORMAL ! JS

console.log(typeof Number("23"));
console.log(typeof "23");
console.log(typeof +"23");

console.log(parseInt("30px",10));

console.log(isNaN(" 4x"));

let code = "1ceji45r.revk45r";

let codeChiffre = code.replace(/\D/g,'');
console.log(codeChiffre);