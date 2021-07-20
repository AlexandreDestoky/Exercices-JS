"use strict";

// navigator.geolocation.getCurrentPosition(position => console.log(position),err => console.log(err))

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => console.log(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve,reject);
  });
};


getPosition().then(pos => console.log(pos))