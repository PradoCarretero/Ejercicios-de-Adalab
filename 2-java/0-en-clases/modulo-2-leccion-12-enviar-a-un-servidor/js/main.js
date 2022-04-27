"use strict";

//------------------MANDAR DATOS------------------
/* por ejemplo vamos a mandar const user2 a awasome profile cards.herokuapp */
const user = {
  name: "María",
  lastname: "Ruiz",
};

const user2 = {
  palette: 1,
  name: "María García",
  job: "Front-end developer",
  phone: "+34 666666666",
  email: "mariagar@example.com",
  linkedin: "mariagar",
  github: "mariagar",
  photo: "data:image/png;base64,2342ba...",
};
fetch("https://awesome-profile-cards.herokuapp.com/card/", {
  method: "POST",
  body: JSON.stringify(user2),
  headers: {
    "content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((cardData) => console.log(cardData));
