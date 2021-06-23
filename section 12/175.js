"use strict";

let mnt = new Date();

// console.log(new Intl.DateTimeFormat("fr-FR").format(mnt));
// console.log(new Intl.DateTimeFormat("fr-BE").format(mnt));
// console.log(new Intl.DateTimeFormat("en-US").format(mnt));
// console.log(new Intl.DateTimeFormat("en-GB").format(mnt));
// console.log(mnt);
// console.log(mnt.toLocaleString("fr-FR",{weekday:"long",month:"short"}));
// console.log(mnt.toLocaleString("en-us"));
// console.log(mnt.toLocaleDateString("en-us"));



// vendredi 23 mai 2019

const formeDate = function(date = new Date()) {
  let dateConv = new Date(date);
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  }
  let paysUser = navigator.language;
  return dateConv.toLocaleDateString(paysUser,options);
}

console.log(formeDate());
console.log(formeDate("Oct 25 2021 "));

console.log("--------------------------");


const porteBonheur = function(nbrVendredi13 = 50) {
  let jour = new Date();
  let options = {
    weekday:"short",
    day:"numeric",
    month:"long",
    year:"numeric"
  }
  let cpt = 1;
  do{
    let jourSemaine = jour.getDay();
    let jourNombre = jour.getDate();
    if(jourSemaine === 5 && jourNombre === 13) {
      console.log(`N°${cpt} : ${jour.toLocaleString("fr-FR",options)}`);
      cpt++;
    }
    jour.setDate(jour.getDate() + 1);
  } while( cpt <= nbrVendredi13)
}

porteBonheur();