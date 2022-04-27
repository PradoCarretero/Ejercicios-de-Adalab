"use strict";
const text = document.querySelector(".js-text");
const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];

  console.log(tasks.length);

  for (let i = 0; i < tasks.length; i++) {
      const todo = `<li>${tasks[i].name}</li>`;
    text.innerHTML += todo;
    
  /*   if (tasks[i].completed = true) {
       console.log(tasks[i].name);
    } */
  }


  //por terminar,..