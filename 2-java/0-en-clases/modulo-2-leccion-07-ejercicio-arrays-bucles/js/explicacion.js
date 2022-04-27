"use strict";
//----------------FORMA ANTIGUA--------
const m1 = "Lola";
const m2 = "Pepe";
const m3 = "Zeus";
const m4 = "Toby";

const pets = document.querySelector(".js-pets");

/* pets.innerHTML += `<li>${m1}</li>`;
pets.innerHTML += `<li>${m2}</li>`;
pets.innerHTML += `<li>${m3}</li>`;
pets.innerHTML += `<li>${m4}</li>`; */


//-------------------ARRAYS------------
const nameList = ["Lola", "Pepe", "Zeus", "Toby"];

/* ver las posiciones */
console.log(nameList[0], nameList[1]);

/* otra forma de crearlo */
const listPets = [];
listPets[0] = "Lola";
listPets[1] = "Pepe";
console.log(listPets[0], listPets[1]);

//----------------BUCLES---------------

/* añadir las mascotas al HTML de forma automática, hacer una estructura iterativa */

/* for clásico: */
/* inicio/ hasta dónde/ incremento entre [] */ 
/* i++ ---> 9 = i+1 */
for(let i = 0; i < nameList.length; i++) {
    pets.innerHTML += `<li>${nameList[i]}</li>`;
}

/* for off: comprende que va de principio a fin*/ 
/* guarda en la variable pet los elemntos de nameList, no hay que indicar posiciones, ya lo da por supuesto */
for (let pet of nameList) {
    pets.innerHTML +=  `<li>${pet}</li>`;
} 

