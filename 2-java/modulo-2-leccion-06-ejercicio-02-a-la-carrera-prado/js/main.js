"use strict";
const adalaber = {};
adalaber.name= "Susana";
adalaber.age= 34;
adalaber.job= "periodista";
adalaber.speak = () => `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}`;
adalaber.run = () => `Estoy corriendo`;
adalaber.runMarathon = (distance) => `Estoy corriendo un maratón de ${distance} kilómetros`;


    console.log(adalaber.run());
    console.log(adalaber.runMarathon(50));