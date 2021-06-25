"use strict";

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