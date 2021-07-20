"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// ///////////////////////////////////////

// const affichePays = function(data,className = "") {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} M</p>
//       <p class="country__row"><span>🗣️</span>${data.languages.map(el => el.name)}</p>
//       <p class="country__row"><span>💰</span>${data.currencies.map(el => el.name)}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend",html);
//   countriesContainer.style.opacity = 1;
// }

// const dataPaysEtVoisin = function(pays) {
//   // AJAX APPELLE PAYS 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${pays}`);
//   request.send();

//   request.addEventListener("load", function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     affichePays(data);
//     //Voisin  (PAYS 2)
//     const [voisin] = data.borders;
//     if(!voisin) return;
//     // AJAX APPELLE PAYS 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${voisin}`);
//     request2.send();
//     request2.addEventListener("load",function() {
//       const data2 = JSON.parse(this.responseText)
//       affichePays(data2,"neighbour");
//       console.log(this);
//     })

//   });
// }

// dataPaysEtVoisin("SWEDEN");
// dataPaysEtVoisin("France");
// dataPaysEtVoisin("Congo");
// // dataPaysEtVoisin("GB");

// ------------------------------------------------------------------------------------------------------
const affichePays = function (data, className = "") {
  const html = `
  <article class="country ${className}">
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
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// Méthode XMLHttpRequest
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${pays}`);
//   request.send();

// Méthode Fetch
// const request = fetch(`https://restcountries.eu/rest/v2/name/france`);
// console.log(request);

const afficheErreur = function(msg) {
  countriesContainer.insertAdjacentText("beforeend",msg);
  // countriesContainer.style.opacity = 1;
}

const getJSON = function(url,errorMsg = "Un problème est survenu") {
  return fetch(url)
  .then(response => {
    if(!response.ok) throw new Error(`${errorMsg}`);
    return response.json();
  })
}

const dataPaysEtVoisin = function (pays) {

    getJSON(`https://restcountries.eu/rest/v2/name/${pays}`,"Pays non trouvé !")
    .then(response => {
      affichePays(response[0]);
      const voisin = response[0].borders[0];

      if (!voisin) throw new Error("No neighbour found !");

      return getJSON(`https://restcountries.eu/rest/v2/alpha/${voisin}`,"Test 2")
    })
    .then(response => response.json())
    .then(response => affichePays(response, "neighbour"))
    .catch(err => {
      afficheErreur(`Un problème est survenu : ${err}. Essayez encore !`);
    })
    .finally(()=> {
      countriesContainer.style.opacity = 1
    })
    
};

// dataPaysEtVoisin("belgique");
// dataPaysEtVoisin("Australia");
// dataPaysEtVoisin("spain");

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=645697531954568548632x24006`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => affichePays(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=645697531954568548632x24006`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);


