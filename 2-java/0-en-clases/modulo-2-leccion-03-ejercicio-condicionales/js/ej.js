"use strict"

//traer elementos del HTML
const whereFrom = document.querySelector(".js-whereFrom");
const whereTo = document.querySelector(".js-whereTo");
const result = document.querySelector(".js-result");
const notificacion = document.querySelector(".notificacion");

/*  if (whereFrom.value === "Palma" && whereTo.value === "Barcelona") {result.innerHTML = "descuento 5%";}  */

if (whereFrom.value === "Palma") {if(whereTo.value === "Barcelona") {
    result.innerHTML = "descuento 5%";
    notificacion.classList.remove("hidden");
}} 

/* //ternario
result.innerHTML = whereFrom.value === "Palma" && whereTo.value === "Barcelona" 
? "descuento 5%" 
: "No hay descuento"; */