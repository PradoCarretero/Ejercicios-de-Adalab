"use strict";

const listPersons = [
    ['Pedro','Pérez'],
    ['Maricarmen','Ruiz'],
    ['Almudena','Sánchez'],
];

for (const person of listPersons) {
    console.log(person);
    for (const name of person) {
        console.log(name);
    }
}