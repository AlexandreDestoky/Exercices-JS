"use strict";

const lotteryPromesse = new Promise(function (resolve, reject) {
  console.log("tirage au sort 😁");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("Vous avez gagné 🎉 !");
    } else {
      reject(new Error("Vous avez perdu 😭 !"));
    }
  }, 2000);
});

lotteryPromesse.then(res => console.log(res)).catch(err => console.error(err));


const wait = function (secondes) {
  return new Promise(function(resolve) {
    setTimeout(resolve,secondes * 1000)
  })
};


// wait(4).then(() => {
//   console.log("Wait fini 4secondes!");
//   return wait(3);
// }).then(() => console.log("Wait fini 3 secondes plus tard"))

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);


Promise.resolve("abc").then(x => console.log(x));
Promise.reject("abc").catch(x => console.log(x));