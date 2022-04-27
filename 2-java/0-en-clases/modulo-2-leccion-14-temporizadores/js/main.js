"use strict";
/* const handleInterval = () => {
  console.log("hola buenos días");
 
};

setInterval(handleInterval, 1000); */
const aside = document.querySelector(".js_ads");
const iniciar = document.querySelector(".js-iniciar");
let cont = 0;

function renderPubli(url) {
  aside.innerHTML = `<img src="${url}" alt="">`;
}

function stopInterval() {
  if (cont === 10) {
    clearInterval(idInterval);
  }
}

const showPubli = () => {
  cont++;
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((info) => {
      renderPubli(info.message);
      console.log(info);
    });
  stopInterval();
};

// se ejecuta cuando carga la pág
showPubli();
// se ejecuta cada 5 seg
let idInterval = setInterval(showPubli, 5000);

console.log(idInterval);

// botón iniciar
iniciar.addEventListener("click", handleClick);
function handleClick() {
  cont = 0;
  idInterval = setInterval(showPubli, 4000);
}
