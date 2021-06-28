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
// console.log(getComputedStyle(message).height);
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

// h1.addEventListener("mouseenter",alert1)

// setTimeout(()=> h1.removeEventListener("mouseenter",alert1),3000);


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



// -------------- 189 ---------------
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});


// -------------- 190 ---------------
// Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);


// -------------- 191 ---------------
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

// MAUVAISE PRATIQUE
// tabs.forEach(el => el.addEventListener("click",(e)=> {
//   console.log(e.target);
// }))

tabsContainer.addEventListener("click",(e)=> {
  // if(e.target.classList.contains("operations__tab") || e.target.parentElement.classList.contains("operations__tab") ) {
  //   console.log(e.target);
  // }
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if(!clicked) return;

  tabs.forEach(el => el.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  
  const dataTab = clicked.getAttribute("data-tab");
  tabsContent.forEach(el => el.classList.remove("operations__content--active"));
  tabsContent[dataTab-1].classList.add("operations__content--active");
})


// -------------- 192 ---------------
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// -------------- 193 ---------------
