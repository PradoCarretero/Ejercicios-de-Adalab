"use strict";
const adalabers = [
    {
      name: 'julia',
      city: 'barcelona',
      address: {
        country: 'España',
        zp: 2080,
      },
    },
    {
      name: 'marina',
      city: 'murcia',
      address: {
        country: 'EEUU',
        zp: 1000,
      },
    },
    {
      name: 'marcela',
      city: 'barcelona',
      address: {
        country: 'Italia',
        zp: 4500,
      },
    },
  ];

//-----------------MAP----------------------
/* cuando tengo muchas líneas de código tengo que poner llaves */
const newAdalabers = adalabers.map((ada) => {
    const newAda = {
        nombre: ada.name,
        ciudad: ada.city,
        pais: ada.address.country,
    };
return newAda;
    });
console.log(newAdalabers);

/* a veces no necesito ni llaves ni paréntesis */
const number = [1, 2, 3, 4, 5];
const newNumber = number.map( n => n * 1,21);

//---------------------FILTER-------------------- 
/* vamos a filtar de adalabers las que vivan en Bcn y se llamen Marcela */
const cityInput = "Barcelona";
const nameInput = 'marcela';
/* const dataFiltered = adalabers.filter(person => person.city === "barcelona"); */
const dataFiltered = adalabers
.filter(person => person.city.toLowerCase() === cityInput.toLowerCase())
.filter(person => person.name === nameInput);
console.log(dataFiltered);

/* cómo funciona el filtro por dentro */
const dataFilteredFor = [];
for (const ada of adalabers) {
    if (ada.city.toLowerCase() === cityInput.toLowerCase()){
        dataFilteredFor.push(ada);
    }
}
console.log(dataFilteredFor);

//--------------------------FIND INDEX-------------------

/* indexof--no lo encuentra, porque no recibe como parámetro una función */
console.log(adalabers.indexOf("julia"));
/* usar findindex */
const indexPerson = adalabers.findIndex(any => any.name === 'Julia'.toLowerCase());
console.log(indexPerson);

//----------------FIND------------------
const findPerson = adalabers.find((adalaber) => adalaber.address.zp === 1000);
console.log(findPerson);

//---------------EJERCICIO
const inputElement = document.querySelector(".js-name");
const ulElement = document.querySelector(".js-list");

function paintList(list) {
    ulElement.innerHTML="";
for(const li of list){
    ulElement.innerHTML += `<li> ${li.name} </li>`;
}
}
function handleInput() {
    const inputValue = inputElement.value;
    const listFiltered = adalabers.filter(persona => persona.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    paintList(listFiltered)
}

inputElement.addEventListener("keyup", handleInput);
