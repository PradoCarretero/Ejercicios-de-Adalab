"use strict";
const listPalletes = document.querySelector(".js-list-palettes");
const urlServer =
  "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json";
let palettes = [];

function ListenersPalletes() {
  const liPalette = document.querySelectorAll(".js-palette");
  for (const item of liPalette) {
    item.addEventListener("click", handleClickPalette);
  }
}
function PaintPalettes(palettes) {
  let html = "";

  for (const paletteItem of palettes) {
    let classFavorite = "";
    const favoriteFoundIndex = favorites.findIndex((fav) => {
      return fav.id === paletteItem.id;
    });

    if (favoriteFoundIndex !== -1) {
      classFavorite = "palette--favorite";
    } else {
      classFavorite = "";
    }

    html += `<li class="palletes js-palette ${classFavorite}" id=${paletteItem.id}
    >`;
    html += `<h2>${paletteItem.name}</h2>`;
    html += `<div class="palette__colors">`;
    for (const palleteColor of paletteItem.colors) {
      html += `<div class = "palette__color" style="background-color: #${palleteColor}"></div>`;
    }
    html += `</div>`;
    html += `</li>`;
  }
  listPalletes.innerHTML = html;

  //listener de las paletas
  ListenersPalletes();
}

// array favoritos
let favorites = [];

function handleClickPalette(event) {
  console.log(event.currentTarget.id);
  /* miro cuál es la paleta */
  const idPaletteSelected = event.currentTarget.id;
  const paletteFound = palettes.find((fav) => {
    return fav.id === idPaletteSelected;
  });
  /* miro si ya está entre los fav */
  const favoriteFoundIndex = favorites.findIndex((fav) => {
    return fav.id === idPaletteSelected;
  });
  /* hago condicionales para agregar o quitar, teniendo en cuenta los datos obtenidos arriba */
  if (favoriteFoundIndex === -1) {
    favorites.push(paletteFound);
    /* otra manera sería esta
    const paletteLi = document.querySelector(`.js-${idPaleteSelected}`);
    console.log(paletteLi);etcm,,, pero no debemos hacerlo así porque entonces la primera vez que se abra la página si hay favoritos en localstorage no se pintarán como favoritos,...
    `pintar los favoritos siempre desde renderfunción pintar,..
     */
  } else {
    favorites.splice(favoriteFoundIndex, 1);
  }
  console.log(favorites);
  PaintPalettes(palettes);
}

/* filtar */

function handleInput(event) {
  event.preventDefault();
  const filterValue = input.value;
  const listFiltered = palettes.filter((palette) => {
    return palette.name.includes(filterValue);
  });
  /*  palettes = listFiltered----> no , xq es sobreescribir y así   al borrar no funciona, mejor por parámetros*/
  PaintPalettes(listFiltered);
}

const input = document.querySelector(".js-input");
input.addEventListener("keyup", handleInput);

//---------LOCAL STORAGE------------
const listPalettesStorage = JSON.parse(localStorage.getItem("listPaletes"));
if (listPalettesStorage !== null) {
  palettes = listPalettesStorage;
  PaintPalettes(palettes);
} else {
  fetch(urlServer)
    .then((response) => response.json())
    .then((data) => {
      palettes = data.palettes;
      localStorage.setItem("listPalettes", JSON.stringify(palettes));
      console.log(palettes);
      PaintPalettes(palettes);
    });
}
