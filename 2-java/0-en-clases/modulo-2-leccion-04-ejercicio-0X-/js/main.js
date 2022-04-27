"use strict";
const form = document.querySelector(".js-form");
const button = document.querySelector(".js-submit");


form.addEventListener("change" ,(event)=> {
    console.log(event.currentTarget); //veo sobre qué elto ocurre la acción -- sobre el formulario
    console.log(event.target); // saber + específicamente donde tocó la usuaria, x ejemplo en el 1er input del formulario
});

button.addEventListener("click" ,()=> {
    event.preventDefault();
});

//puedo usar para evitar el submit o click sobre el botón, o submmit sobre el formulario