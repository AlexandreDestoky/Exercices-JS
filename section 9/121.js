"use strict";

let prenom = "aLexAndRE"; 
prenom = prenom.toLowerCase();
prenom = prenom[0].toUpperCase() + prenom.slice(1);
console.log(prenom);

const mailCheck = function(mail) {
  return mail.includes("@") && mail.includes(".");
}

console.log(mailCheck("adestoky@yahoo.fr"));