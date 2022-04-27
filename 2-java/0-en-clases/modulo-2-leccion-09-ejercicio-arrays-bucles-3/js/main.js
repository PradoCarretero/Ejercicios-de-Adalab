"use strict";

const listPersons = [
    ['Pedro','Pérez'],
    ['Maricarmen','Ruiz'],
    ['Almudena','Sánchez'],
];

//-----------COGER SÓLO LOS NOMBRES 

/* método 1 */
for (const person of listPersons) {
 for (let i = 0; i < person.length; i++) {
    if (i === 0){
        console.log(person[i]);
        }
    }
}
/* método 2 */
for (let i = 0; i < listPersons.length; i++) {
    console.log(listPersons[i][0]); 
}

//----------QUERYSELECTORALL
const listLi = document.querySelectorAll(".js-li");
console.log(listLi);

/* método 1 */
for (let i = 0; i < listLi.length; i++) {
    listLi[i].innerHTML = 'patatilla';
}

/* método 2 */
for(const li of listLi){
li.innerHTML = 'huevos';
}


