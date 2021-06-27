"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


// -------------- 183 ---------------
const header = document.querySelector('.header');

const message = document.createElement("div");
message.classList.add("cookie-message");
// console.log(message);

message.innerHTML = `Ce site utilise des cookies
<button class="btn btn--close-cookie">Got it ! </button> `;
// placer dans DOM
// header.append(message);
// header.prepend(message.cloneNode(true));
header.before(message);
// header.after(message);

// supprimer élément
document.querySelector(".btn--close-cookie").addEventListener("click",()=> message.remove());


// -------------- 184 ---------------
message.style.backgroundColor = "#37383d";
// message.style.height = "120%";
// console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height = parseInt(getComputedStyle(message).height) + 20 + "px";


// -------------- 185 ---------------
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click",function(e){
  const s1coord = section1.getBoundingClientRect();

  // document.documentElement.style.scrollBehavior = "smooth"; Pour tout HTML
  // window.scrollTo({top: s1coord.top + window.pageYOffset,behavior:"smooth"});
  // MODERNE
  section1.scrollIntoView({behavior:"smooth"});
})


// -------------- 186 ---------------
const h1 = document.querySelector("h1");
const alert1 = function(e) {
  alert("addEventListener : ça marche !");
}

h1.addEventListener("mouseenter",alert1)

setTimeout(()=> h1.removeEventListener("mouseenter",alert1),3000);


// -------------- 188 ---------------
// // Event Propagation in Practice
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
//   // e.stopPropagation();

// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
//   // e.stopPropagation();

// });

