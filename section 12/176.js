"use strict";

const num = 468786786.55;

console.log("US",new Intl.NumberFormat("en-us").format(num));
console.log("BE",new Intl.NumberFormat("fr-be").format(num));
console.log("BE",new Intl.NumberFormat(navigator.language).format(num));