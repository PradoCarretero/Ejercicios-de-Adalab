"use strict";
//ejercicio 1
const resultado = document.querySelector(".js-resultado");
resultado.innerHTML = 2*5+3*2+4/2;
//ejercicio 2
const resultado1 = document.querySelector(".js-resultado1");
resultado1.innerHTML = (128-2)/9;
// ejercicio 3
const resultado2 = document.querySelector(".js-resultado2");
let age = 60;
resultado2.innerHTML = 365*24*age;

//ejercicio 4
const name = "Paqui";
 console.log(`Hola ${name}, encantada de conocerte`); 

//ejercicio 5
const name2= "Prado";
console.log(`Hola ${name} y ${name2}. ¿Qué tal?`);

//ejercicio 6

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const dog1= document.querySelector(".js-dog1");
dog1.innerHTML= ` <img src="${firstDogImage}"> ${firstDogName}`;

const dog2= document.querySelector(".js-dog2");
dog2.innerHTML= ` <img src="${secondDogImage}"> ${secondDogName}`;

const dog3= document.querySelector(".js-dog3");
dog3.innerHTML= (` <img src="${thirdDogImage}"> ${thirdDogName}`);

//ejercicio 7 mal: cuántas letras tiene mi nombre
const myname = "Prado Carretero Ayala";
const characters = document.querySelector(".js-characters");
characters.innerHTML = "Mi nombre es Leticia Fernández Sánchez, y está compuesto por 23 caracteres.";


