"use strict";
const filmsList = document.querySelectorAll(".js-input");
const submit = document.querySelector(".js-submit");
const message = document.querySelector(".js-message");

function handleButton(event) {
  event.preventDefault();
  let obras = "";
  for (const itemInput of filmsList) {
    console.log(itemInput.value);
    obras += itemInput.value + " ,";
  }
  message.innerHTML = `A mi también me encantó ${obras}`;
}

submit.addEventListener("click", handleButton);
