"use strict";
const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
  ];

  const user =users.find((name) => name.pin === 5232);
  console.log(user);

  const userDeleteIndex = users.findIndex((name) => name.pin === 5232);
const userDelete = users.splice(userDeleteIndex,1);
console.log(userDelete);
console.log(users);