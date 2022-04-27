"use strict";
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];
function sayHi(any) {
  if (users.isPremium === true) {
    `Bienvenida ${any.name}. Gracias por confiar en nosotros`;
  } else {
    "Bienvenida " + any.name;
  }
}
const greeting = users.map(sayHi);
console.log(sayHi);

// solucion alumnas
/* 'use strict';

const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];


const sayHi = users.map(
    users => {
    if (users.isPremium === true) {
        return `Bienvenida ${users.name}. Gracias por confiar en nosotros`;
    } else {
        return `Bienvenida ${users.name}`; 
    } }
);

console.log(sayHi); */
