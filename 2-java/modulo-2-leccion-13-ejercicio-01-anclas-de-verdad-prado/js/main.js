"use strict";
//constantes
const link1 = document.querySelector(".js-link1");
const link2 = document.querySelector(".js-link2");
const link3 = document.querySelector(".js-link3");
let section1 = document.querySelector(".js-section1");
let section2 = document.querySelector(".js-section2");
let section3 = document.querySelector(".js-section3");
//data-
link1.setAttribute("data-", "1");
link2.setAttribute("data-", "2");
link3.setAttribute("data-", "3");

function handleClick1(event) {
  event.preventDefault();
  window.scrollTo(0, 100);
}

function handleClick2(event) {
  event.preventDefault();
  window.scrollTo(0, 700);
}

function handleClick3(event) {
  event.preventDefault();
  window.scrollTo(0, 1300);
}

link1.addEventListener("click", handleClick1);
link2.addEventListener("click", handleClick2);
link3.addEventListener("click", handleClick3);

//domRect
let rect = section3.getBoundingClientRect();
for (var key in rect) {
  if (typeof rect[key] !== "function") {
    let para = document.createElement("p");
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
