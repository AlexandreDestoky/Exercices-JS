"use strict";

// setTimeout(()=> {
//   console.log(Date.now());
// },2000);

// setInterval(()=> {
//   document.write(" ERREUR VIRUS DETECTE !! ");
// },50);
// setInterval(()=> {
//   console.log(new Date());
// },1000);

let horloge = document.createElement("div");
horloge.innerHTML = `<span class="heure">15</span>:<span class="minute">25</span>:<span class="seconde">32</span>`;

document.body.append(horloge);

horloge.style.fontSize = "60px";

let heure = document.querySelector(".heure");
let minute = document.querySelector(".minute");
let seconde = document.querySelector(".seconde");

heure.textContent = "00";
minute.textContent = "00";
seconde.textContent = "00";

const compteur = function() {
  seconde.textContent = Number(seconde.textContent) + 1;
  Number(seconde.textContent) < 10 ? seconde.textContent = "0" + seconde.textContent  : "";
  if(Number(seconde.textContent) > 59) {
    seconde.textContent = 0;
    minute.textContent = Number(minute.textContent) + 1;
    Number(minute.textContent) < 10 ? minute.textContent = "0" + minute.textContent  : "";
    if(minute.textContent > 59) {
      minute.textContent = 0;
      heure.textContent = Number(heure.textContent) + 1 
    }
  }


}

setInterval(compteur,30);