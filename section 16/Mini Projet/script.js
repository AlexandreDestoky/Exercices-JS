"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const dataPays = function(pays) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${pays}`);
  request.send();
  
  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.languages);
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} M</p>
        <p class="country__row"><span>🗣️</span>${data.languages.map(el => el.name)}</p>
        <p class="country__row"><span>💰</span>${data.currencies.map(el => el.name)}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend",html);
    countriesContainer.style.opacity = 1;
  });
}

dataPays("belgique");
dataPays("France");
// dataPays("Italia");
dataPays("Suisse");
