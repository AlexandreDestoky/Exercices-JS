"use strict";

console.log(new Date());
console.log(new Date("Jun 21 2021 12:07:14"));  
console.log(Date.now()); 

console.log(new Date().getFullYear());
console.log(new Date().getMonth()+1);
console.log(new Date().getDate());

let today = new Date();
today.setFullYear(2022);

console.log(today);