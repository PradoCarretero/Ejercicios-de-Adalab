"use strict";
debugger;
const inputName = document.querySelector(".js_name");

 const inputLastname = document.querySelector(".js_lastname");

 const button = document.querySelector(".js_button");

 const result = document.querySelector(".js_result");


 button.addEventListener("click" ,()=> {
     /* const name = inputName.value;
     const lastName = inputLastname.value;
     result.innerHTML = name + lastName; */
     result.innerHTML = inputName.value + inputLastname.value;
 });

inputName.addEventListener("keyup" ,()=> {
document.querySelector(".js_title").innerHTML = inputName.value;
});

inputLastname.addEventListener("keyup" ,()=> {
    document.querySelector(".js_last").innerHTML = inputLastname.value;
    });