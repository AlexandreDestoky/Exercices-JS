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
message.style.width = "120%";
// console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height = parseInt(getComputedStyle(message).height) + 20 + "px";