"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// console.log(accounts);
const bankDepositSum = accounts.map(acc => acc.movements).flat();
// console.log(bankDepositSum);

const bankDepositSum2 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum2);

let plus1000 = bankDepositSum.reduce((a, b) => (b > 1000 ? ++a: a), 0);

// let plus1000 = bankDepositSum.filter(x => x >= 1000).length;
// console.log(plus1000);


const sums = accounts
.flatMap(acc => acc.movements)
.reduce((sums,cur) => {
  cur >0 ? sums.deposits += cur : sums.withdrawls += cur
  return sums;
},{deposits : 0,withdrawls : 0})

// console.log(sums);

const convertTitleCase = function(phrase) {
  const exceptions = ["a","an","the","but","or","on","in","with"];
  phrase = phrase.toLowerCase().split(" ");
  phrase.forEach((mot,i) => {
    !exceptions.includes(mot) ? phrase[i] = mot[0].toUpperCase() + mot.slice(1): mot;
  });
  return phrase.join(" ");
}

console.log(convertTitleCase("this is a nice title"));