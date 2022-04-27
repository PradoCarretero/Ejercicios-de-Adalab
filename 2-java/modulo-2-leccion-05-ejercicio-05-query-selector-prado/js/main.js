"use strict";

//const title = document.querySelector("js-text");

// QUIERO ESCRIBIR:
//const title = getEl(".title");
//debugger;

function getEl(selector) {

if(selector.includes(".")) {
    const element = document.querySelector(selector);
    return element;
}

else if (element === null) {
    console.log(`No existe ningún selector llamado ${selector}`);
}
 else {
     console.log("se te ha olvidado el punto");
 }
};

const txt = getEl(".btn");


//PRUEBA PARA VER SI FUNCIONA
txt.innerHTML="PRUEBA";

