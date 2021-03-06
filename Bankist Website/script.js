"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");

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
const header = document.querySelector(".header");

const message = document.createElement("div");
message.classList.add("cookie-message");
// console.log(message);

message.innerHTML = `Ce site utilise des cookies
<button class="btn btn--close-cookie">Got it ! </button> `;
// placer dans DOM
// header.append(message);
// header.prepend(message.cloneNode(true));
// header.before(message);
// header.after(message);

// supprimer élément
// document.querySelector(".btn--close-cookie").addEventListener("click", () => message.remove());

// -------------- 184 ---------------
message.style.backgroundColor = "#37383d";
// message.style.height = "120%";
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
message.style.height = parseInt(getComputedStyle(message).height) + 20 + "px";

// -------------- 185 ---------------
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coord = section1.getBoundingClientRect();

  // document.documentElement.style.scrollBehavior = "smooth"; Pour tout HTML
  // window.scrollTo({top: s1coord.top + window.pageYOffset,behavior:"smooth"});
  // MODERNE
  section1.scrollIntoView({ behavior: "smooth" });
});

// -------------- 186 ---------------
const h1 = document.querySelector("h1");
const alert1 = function (e) {
  alert("addEventListener : ça marche !");
};

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

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// -------------- 190 ---------------
// Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

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

tabsContainer.addEventListener("click", e => {
  // if(e.target.classList.contains("operations__tab") || e.target.parentElement.classList.contains("operations__tab") ) {
  //   console.log(e.target);
  // }
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  if (!clicked) return;

  tabs.forEach(el => el.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  const dataTab = clicked.getAttribute("data-tab");
  tabsContent.forEach(el => el.classList.remove("operations__content--active"));
  tabsContent[dataTab - 1].classList.add("operations__content--active");
});

// -------------- 192 ---------------
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// -------------- 193 et 194---------------
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
// L'équivalent d'un position sticky mais en JS

// --------------195--------------
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// --------------196--------------
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.8,
  rootMargin: "20px",
});

imgTargets.forEach(img => imgObserver.observe(img));

// -------------- 197 198--------------
// Selection DOM
const slides = document.querySelectorAll(".slide");
const btnGauche = document.querySelector(".slider__btn--left");
const btnDroite = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");

// Variables de travail
let curSlide = 0;
const maxSlide = slides.length;

//Créer les points du diaporama
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
  });
};

const activateDot = function (slide) {
  document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("dots__dot--active"));
  
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
};

//Créer Diapo Début
const goToSlide = function (slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
};

//Prochaine Slide
const nextSlide = function () {
  curSlide === maxSlide - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};

// const init = function() {
//   goToSlide(0);
//   createDots();
//   activateDot(0);
// }
// init();

//Fonction une utilisation IIFE
(function(){
  goToSlide(0);
  createDots();
  activateDot(0);
})();

//Précédente Slide
const prevSlide = function () {
  curSlide === 0 ? (curSlide = maxSlide - 1) : curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};

// Events
btnDroite.addEventListener("click", nextSlide);
btnGauche.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});


// -------------- 199 --------------
// window.addEventListener("beforeunload",function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// })

// -------------- 200 --------------
// Defer and Async 

