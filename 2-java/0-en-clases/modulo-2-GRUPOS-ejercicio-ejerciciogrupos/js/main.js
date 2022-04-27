"use strict";
const titleDesignLegend = document.querySelector(".js__title_design");

const text = document.querySelector(".js-text");

titleDesignLegend.addEventListener("click" ,(event)=> {
text.classList.toggle("hidden");
document.querySelector(".arrow").classList.toggle("switched");
});