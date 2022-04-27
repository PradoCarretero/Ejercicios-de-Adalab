"use strict";
const saludo = document.querySelector(".js-saludo");
const despedida = document.querySelector(".js-despedida");

function funSaludo (name){
     return `<li> ${name} </li>` 
};

const paintConsole = (age) => {
if(age>18){
    console.log("Bienvenido a mi web");
}
else {
    console.log("Debes esperar unos añitos");
}
};


saludo.innerHTML += funSaludo("Prado");
saludo.innerHTML += funSaludo("Rosa");

despedida.innerHTML += funSaludo("Sara");

paintConsole(20);
paintConsole(15);