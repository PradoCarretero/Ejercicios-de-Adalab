'use strict';

const list = document.querySelector(".js-list");

const item1 = "cebollas";
const price1 = "1.5";
const item2 = "aguacates";
const price2 = "5";
const item3 = "champiñones";
const price3 = 2;

/* list.innerHTML = `<li>${item1} </li>`;
list.innerHTML += `<li>${item2} </li>`;
list.innerHTML += `<li>${item3} </li>`; */

let html = "";
html += `<li> ${item1} <span> ${price1} </span> </li>`;
html += `<li> ${item2} <span> ${price2} </span> </li>`;
html += `<li> ${item3} <span> ${price3} </span> </li>`;

list.innerHTML = html; 

const total = parseFloat(price1) + parseInt(price2) + price3;
console.log(total);

const iva = total * 0.21;
console.log(iva);

list.innerHTML += `<li> Total: ${total} Iva: ${iva}  Total a pagar: ${total+iva}`;


