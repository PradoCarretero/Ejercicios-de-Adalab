"use strict";
const listInput = document.querySelectorAll(".js-input");
const btn = document.querySelectorAll(".js-button");
let user = {};

const handleInput = () => {
  const idInput = event.currentTarget.id;
  user[idInput] = event.currentTarget.value;
  console.log(user);
};

for (const input of listInput) {
  input.addEventListener("keyup", handleInput);
}

function handleBtn(event) {
  event.preventDefault();
  localStorage.setItem("datauser", JSON.stringify(user));
}

btn.addEventListener("click", handleBtn);

const dataLocal = localStorage.getItem("datauser");
if (dataLocal !== null) {
  user = JSON.parse(dataLocal);
}

console.log(user);

//1. cogemos datos que queremos para el local storage y los transformo a string
//2. coloco datos en local sotrage (set item)
//3. Para sacar (get item) valido que los datos no sean null y entonces sí podría hacer cosas con ellos
//4. llevo esa cadana a objetos otra vez (json.parse)
