"use strict";
const items = [
  "Ada",
  1815,
  ["Informática", "Matemática", "Escritora"],
  {
    mother: "Anna Isabella",
    father: "Lord Byron",
  },
];

let answer = 0;
for (let i = 0; i < items.length; i++) {
  answer = `El dato ${
    items[i]
  } está en la posición ${i} y es de tipo ${typeof items[i]}`;
  console.log(answer);
}
