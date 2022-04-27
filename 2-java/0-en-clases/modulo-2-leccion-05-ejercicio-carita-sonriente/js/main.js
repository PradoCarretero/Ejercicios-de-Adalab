"use strict";
debugger;
const face = document.querySelector(".js-face");
const button = document.querySelector(".js-button");
const select = document.querySelector(".js-select");
const mainElement = document.querySelector(".js-main");

function generateRandomNumber(max) { 
 const numAleat = parseInt(Math.random()*max);
return numAleat;
}

function refreshface() {
    const selectedface = select.value;
    face.innerHTML = selectedface;
}

function changeColor() {
    const numAleat = generateRandomNumber(100);
    console.log(numAleat);
     if (numAleat%2 ===0) {
         //es par
         console.log("es par");
        mainElement.classList.add('yellow');    
    }
    else {
        console.log("es impar");
        mainElement.classList.add('fire');
        mainElement.classList.remove('yellow');
    } 
}

function handleClickButton(event) {
    event.preventDefault();    
    refreshface();
    changeColor();
}

button.addEventListener("click", handleClickButton);


/* button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("yeahclick");
}); */