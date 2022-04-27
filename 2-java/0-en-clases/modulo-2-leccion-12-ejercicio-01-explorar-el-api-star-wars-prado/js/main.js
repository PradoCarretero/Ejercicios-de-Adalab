"use strict";

const button = document.querySelector(".js-button");
const listElement = document.querySelector(".js-list");
const input = document.querySelector(".js-search");
let listChar = [];

function handleClick() {
  listElement.innerHTML += "";
  fetch(`https://swapi.dev/api/people/?search=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      listChar = data.results.map((char) => {
        const newCha = {
          hair_color: char.hair_color,
          name: char.name,
        };
        return newCha;
      });
      console.log(listChar);
    });
}

button.addEventListener("click", handleClick);
