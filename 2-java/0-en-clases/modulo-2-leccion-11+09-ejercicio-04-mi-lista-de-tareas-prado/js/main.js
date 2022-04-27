"use strict";
/* resuelvo el ej pero desde api */
/*  
flujo-- cuando carga la página
------
  1.- Pido los datos al servidor
  2.- Pinto los datos en HTML
  3.- Esucho el evento sobre el checkbox

flujo-- cuando ocurren las acciones de la usuaria
------
  1.- Cuando la usuaria haga click en el checkbox, recojo los datos
  2.- Modificar los datos 
  3.- Repintar los datos
  4.- Volver a escuchar eventos
*/
const listTasks = document.querySelector(".js-text");
let tasks = [];

function getData() {
  fetch("http://api.igarrido.es/tasks.json")
    .then((response) => response.json())
    .then((data) => {
      tasks = data;
      console.log(tasks);
      renderList();
      listenCheckbox();
    });
}

function renderList() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += `<li>`;
    html += `<input type="checkbox" class="js-complete" value=${i}>`;
    html += tasks[i].name;
    html += `</li>`;
  }
  listTasks.innerHTML = html;
}
function handleClick(event) {
  console.log("he hecho click");
  const inputValue = event.currentTarget.value;
  console.log(inputValue);
  // cambiar el valor de la propiedad complete del elemento
}

function listenCheckbox() {
  const checkboxList = document.querySelectorAll(".js-complete");
  for (const oneCheckbox of checkboxList) {
    oneCheckbox.addEventListener("click", handleClick);
  }
}

getData();
// se ha quedado el ej a media pero dayana lo va a subir completo
