'use strict';
const closeButton = document.querySelector(".js-close");
const overlay = document.querySelector(".js-overlay");
const order = document.querySelector(".js-order");
const liOption1 = document.querySelector(".js-add1");
const liOption2 = document.querySelector(".js-add2");
const liOption3 = document.querySelector(".js-add3");
const listFood = document.querySelector(".js-foodList");


function closePopUp() {
    overlay.classList.add("hidden");
    
};


//--------------------MODO FÁCIL--------------------
closeButton.addEventListener("click" ,closePopUp);

const addItem = (event)=> {
    const liValue = event.currentTarget.innerHTML; // me cojo la info que me interesa del click que se ha producido. 
    order.innerHTML += `<p> ${liValue} </p>`;
   // order.innerHTML += `<p> ${event.currentTarget.innerHTML} </p>`;
};

/* liOption1.addEventListener("click" ,addItem);
liOption2.addEventListener("click" ,addItem);
liOption3.addEventListener("click" ,addItem); */



//--------------------MODO PRO--------------------
function addItem2(event) {
    //a quién escucho?
    console.log(event.currentTarget);
    //sobre quién hago la acción?
    console.log(event.target);
    //realizo la acción: 
    const liValue = event.target.innerHTML;
    order.innerHTML += `<p> ${liValue} </p>`;
};

listFood.addEventListener("click" ,addItem2);


