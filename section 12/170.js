"use strict";

console.log(5 % 2);
console.log(5 / 2);

console.log(8 % 2);

const paire = nombre => nombre % 2 === 0;

console.log(paire(2));



const jeuBottle = limite => {
  const sumDigits = n => n.toString().split("").map(Number).reduce((a,b) => a + b);
  for (let i = 1; i <= limite; i++) {
    console.log(i % 10 === 7 || i % 7 === 0 || sumDigits(i) === 7 ? "Bottle" : i );
  }
};

console.log("---------------------");

jeuBottle(1000);
