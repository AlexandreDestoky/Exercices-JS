"use strict";
const flights = 
"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
 
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

let tabFlight = flights.split("+");
console.log(tabFlight);

for (let vol of tabFlight) {
  vol = vol.split(";");
  vol[0] = vol[0].replaceAll("_"," ").trim();
  vol[0] = (vol[0].includes("Delayed")?"🔴 " : "") + vol[0];
  
  vol[1] = vol[1].substr(0,3).toUpperCase();
  vol[2] = vol[2].substr(0,3).toUpperCase();
  console.log((`${vol[0]} from ${vol[1]} to ${vol[2]} (${vol[3].replace(":","h")})`).padStart(75," "));
}