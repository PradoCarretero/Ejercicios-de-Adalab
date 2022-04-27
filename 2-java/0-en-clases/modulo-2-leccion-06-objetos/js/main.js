'use strict';
/* 
X 1.- Obtener los elementos del HTML (campo de entrada -> inpunt, campos de salida,-> tabla, y el botón para escuchar el evento) 
2.- Escuchar el evento sobre el botón
3.-Crear la funcionalidad para pintar en la rabla
*/

/* variables globales */
const inputId = document.querySelector(".js_id");
const inputName = document.querySelector(".js_name");
const inputBusiness = document.querySelector(".js_business");
const inputContact = document.querySelector(".js_contact");
const inputButton = document.querySelector(".js_button");
const table = document.querySelector(".js_table");

/* función parcial 1 */ //cojo variables locales
function getClientData(event) {
    const clientData = {};
        clientData.name = inputName.value;
        clientData.id = inputId.value;
        clientData.business = inputBusiness.value;
        clientData.contact = inputContact.value;
        return clientData;
        //devuelveme al objeto clientData a la función manejadora y de ahí ejecuta con la info ya la función parcial 2
};

/* función parcial 2 */ //pinto la tabla
function paintHtml(client) {
    table.innerHTML += ` <tr>
    <td>${client.id}</td>
    <td>${client.name}</td>
    <td>${client.business}</td>
    <td>${client.contact}</td>
    </tr>`;
};
    
/* función manejadora */ //para organizar mi código
function handleClick(event){
    event.preventDefault();
    const client = getClientData();                  
    paintHtml(client);
};

/* ESCUCHO Y ACTÚO */
inputButton.addEventListener("click" , handleClick);