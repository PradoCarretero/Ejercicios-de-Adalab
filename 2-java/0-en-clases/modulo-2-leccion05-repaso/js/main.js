"use strict";

const nameInput = document.querySelector(".js-name");
const lastnameInput = document.querySelector(".js-lastname");
const sayHiButton = document.querySelector(".js-button");
const saludoParagraph = document.querySelector(".js-greeting");

function handleClick() {
    const name = nameInput.value;
    const lastname = lastnameInput.value;
saludoParagraph.innerHTML = `Hola ${name} ${lastname}`;
};


sayHiButton.addEventListener("click" ,handleClick);
