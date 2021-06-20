"use strict";

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages => {
  let humanAge = ages.map(x => (x <= 2 ? (x *= 2) : (x = 16 + 4 * x)));
  // console.log(humanAge);
  humanAge = humanAge.filter(x => x >= 18);
  // console.log(humanAge);
  return humanAge.reduce((acc, x) => acc + x) / humanAge.length;
  // return humanAge.reduce((acc,x) => acc + (x / humanAge.length),0); AUTRE SOLUTION
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
