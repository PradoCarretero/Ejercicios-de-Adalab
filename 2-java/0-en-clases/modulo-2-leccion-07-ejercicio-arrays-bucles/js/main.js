"use strict";
// crear un array de objetos
// pintar en el HTML eltos del array
// funcionalidad

const persons = [
    {
        name:"Noelia",
        age:21,
        city: "Madrid",
    },
    {
        name:"Prado",
        age:23,
        city: "Barcelona",
    },
    {
        name:"Sandra",
        age:25,
        city: "Murcia",
    },
    {
        name:"Satory",
        age:24,
        city: "Barcelona",
    },
];

const sectionList = document.querySelector('.js-sectionList');

/* método clásico */

/* for(let i=0; i<persons.length; i++) {
   sectionList.innerHTML += `<li>El nombre es ${persons[i].name}, vive en ${persons [i].city}</li>`;
}; */

/* for of */

/* for (let personElement of persons) {
    sectionList.innerHTML += `<li>El nombre es ${personElement.name}, vive en ${personElement.city}</li>`;
}; */

/* ejercicio: promedio de edades */

/* esta función es para cualquier array */
function avgAgePerson(list) {
   let acumAge = 0;
   for (let i=0; i<list.length; i++){
acumAge += list [i].age};
const media = acumAge/list.length;
return media; 
};
/* aquí es donde especifico el array */
console.log(avgAgePerson(persons));



function countDesigners() {
    let count = 0;
    for (const item of persons) {
        if(item.job) === "Diseñadora" {
            count += 1;
        }
    }
}