"use strict";

//---------------RESUMEN----------
/* traemos el elemento a modificar */
const p = document.querySelector(".js-p");
const elementoList = document.querySelectorAll(".js-p");
const section = document.querySelector(".js-section");

/* Modificar */
// p.innerHTML = "texto";
/* innerHTML -> etiquetas que tienen apertura y cierre */
// input.value = "valor";
/* modificar css */
// p.classList-- > add(), remove(), toggle, contains();
// img.src = "https://ruta";
// img.alt = "texto";
// a.innerHTML = "Haga click aquí";
// a.href = "https://ruta";

//---------------------DOM AVANZADO-----------------
const textoP = document.createTextNode("Bienvenida a JS");
p.appendChild(textoP);

/* si no tengo el párrafo en HTML */
const article = document.createElement("article");
section.appendChild(article);

const textArticle = document.createTextNode("Texto del article");
article.appendChild(textArticle);

const pArticle = document.createElement("p");
const textPArticle = document.createTextNode("Párrafo del artículo nuevo");
pArticle.appendChild(textPArticle);
article.appendChild(pArticle);

/* añadir clases */
article.classList.add("color");

/* añadir atributos */
article.setAttribute("id", "articleProduct");

/* añadir una imagen: son un poco particulares porque no hay que hacer el set atribute*/
const imagen = document.querySelector(".js-img");
imagen.src =
  "https://becasparatodos.com/wp-content/uploads/2021/06/dibujo-de-animales-de-la-selva-724x1024.png";

/* obtener valores */
console.log(article.getAttribute("id"));

const listAdalabers = ["sara", "rocío", "lucía", "elena", "prado"];
const ul = document.querySelector(".js-list");

for (const item of listAdalabers) {
  const li = document.createElement("li");
  ul.appendChild(li);

  const textLi = document.createTextNode(item);
  li.appendChild(textLi);

  li.dataset.dni = item;
  li.dataset.age = 22;

  li.addEventListener("click", handleClick);
}

function handleClick() {
  console.log("he hecho click", event.currentTarget.dataset.dni);
  const age = parseInt(event.currentTarget.dataset.age);
  if (age < 25) {
    console.log("eres una jovencita");
  }
}
/* dataset con como parámetros personalizados, por ej si ya no puedes poner id= porque está ocupado */
