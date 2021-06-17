"use strict";

let doubleAge;

const close = function () {
  const age = 24;
  doubleAge = function () {
    console.log(age * 2);
  };
};


close();
doubleAge();