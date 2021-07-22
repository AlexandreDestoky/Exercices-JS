"use strict";


const whereAmI = async function(country) {
  const res =  await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  console.log(res);
  const data = await res.json();
  console.log(data);

}

whereAmI("portugal");
console.log("First");

