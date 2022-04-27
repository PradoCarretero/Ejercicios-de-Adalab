"use strict";

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((info) => console.log(info));

//-----------------OTRA FORMA
function jsonFormatter(response) {
  return response.json();
}

function paintHTML() {
  const img = document.querySelector(".js-dog");
  img.src = info.message;
}

fetch("https://dog.ceo/api/breeds/image/random")
  .then(jsonFormatter)
  .then((dogData) => {
    console.log(dogData);
    info = dogData;
    paintHTML();
    console.log("el servidor ya me ha dado respuesta");
  });
console.log(info);
console.log("la última línea de código");
