"use strict";

(async function() {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch(err) {
    console.log(err);
  }
  console.log("Fini");
})();