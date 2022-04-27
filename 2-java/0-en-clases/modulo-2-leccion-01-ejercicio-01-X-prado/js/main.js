"use strict";

/* variables */

const title = document.querySelector(".js-title");
const subtitle = document.querySelector("#subtitle");

/* cambios */

//cambios HTML
title.innerHTML = "Título 1 - lección 01 introducción";
//concatenar
//subtitle.innerHTML =  subtitle.innerHTML + " hola pájara"; 
subtitle.innerHTML += "hola pájara";

/* clases */

title.classList.add("violet");
const num1 = 50;
let num2 = 20;

const result = document.querySelector(".result");
result.innerHTML = num1 + num2;

