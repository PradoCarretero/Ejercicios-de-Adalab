"use strict";
const list = ['Ana','Patricia','Celia','Rosa','Carmen'];
const list2 = ['Lucía','Lorena'];

console.log(list.length);

//**Añadir un elto al final
list.push('Paula');
console.log(list.length);

//Añadir un elto al inicio
list.unshift('Alejandra');
console.log(list);

//**Conocer posición de un elto
const index = list.indexOf('Celia');
console.log(index);

const index1 = list.indexOf('Gloria');
console.log(index1);

for (let i = 0; i < list.length; i++) {
   if (list[i] === 'Celia') {
       console.log(i);
   }
}

//darle la vuelta
list.reverse();
console.log(list);

//concatenar
const newList = list2.concat(list);
console.log(newList);

//slice-- extraer un conjunto del array sin modificar el original (desde donde y hasta donde sin incluir)
const slice = newList.slice(2,5);
console.log(slice);

//**splice-- extraer un conjunto del array y modifica el original (desde donde y cuántos y si tengo un tercer parámetro son eltos que añado desde la posición que indiqué)
newList.splice(3,4, "bega")
console.log(newList);