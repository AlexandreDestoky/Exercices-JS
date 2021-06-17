"use strict";


const oneWord = function (str) {
  return str.replaceAll(" ","").toLowerCase();
  }

const upperFirstWord = function(str) {
  const [first,...others] = str.split(" ");
  return [first.toUpperCase(),...others].join(" ");
}

const transformer = function (str,fn) {
  console.log(fn(str));
}


transformer("Javascript is the best !",upperFirstWord);
transformer("Javascript is the best !",oneWord);

const Operation = {
  double(nbr) {
    return nbr*2;
  }
}


console.log(Operation.double(5));

console.log(Math.random());

console.log(Math.random);