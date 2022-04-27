"use strict";

/* ejercicio 1 */
// avatar por defecto
const DEFAULT_AVATAR = "https://placeimg.com/640/480/any";
// avatar que eligió el usuario al registrarse
/* let userAvatar = "http://www.fillmurray.com/300/300"; */
let userAvatar = "";


document.querySelector(".user__avatar").src =  userAvatar || DEFAULT_AVATAR ;

/* ejercicio 2 contorl de acceso */
/* const name = "Prado";
const textname = document.querySelector(".textname");


If (name = "Prado") {textname.innerHTML="Bienvenida, Prado" } else {
    textname.innerHTML="lo siento"
}; */

/* ejercicio  3 completa las condiciones*/

const number = 123123125;
if (number === 0) {
    console.log('El número es 0')
  } else if (number < 0) {
    console.log('El número es negativo')
  } else if (13<(number+2)<=20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } else if (20<number<50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }