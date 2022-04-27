 /* ejercicio 1 */

 const titleElement = document.querySelector(".title");
titleElement.innerHTML = titleElement.innerHTML + " Mundo";
/* ejercicio 4 */
const selectorElement = document.querySelector(".selector");
nameElement = document.querySelector(".name");
selectorElement.innerHTML =
selectorElement.innerHTML + nameElement.innerHTML;

/* ejercicio 5 */
//passwordElement = document.querySelector(".password");
//passwordElement.innerHTML= passwordElement.innerHTML + "hi";
/* ejercicio 6 */
const div = document.querySelector(".div");
const content1 =  '<h1>lorem lorem</h1><img src="http://via.placeholder.com/350x150"/><p>lorem</p>';
div.innerHTML = content1;
/* ejercicio 7 */
ulElement = document.querySelector(".ul");
const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';
ulElement.innerHTML = content;
/* ejercicio 8 */
const button2 = document.querySelector(".button2");
button2.classList.add("buttonop");
button2.classList.remove("button");