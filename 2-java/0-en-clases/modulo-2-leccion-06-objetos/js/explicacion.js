'use strict';
//------------ OBJETO LITERAL 
const coche = {
marca:"Audi",
modelo: "Q8",
year: 2022,
color: "negro",
vendido: false,

/* método undefined */ //(this" sólo se pueden usar en este tipo defunción )
vender: function() {
    this.vendido = true;
    console.log("vendido " + this.vendido);
},
/* métrodo arrow */ // no usar 
pintar: () =>{
console.log("pintar el coche");
},
};



//--------------- ACCIONES 

/* leer código  */
console.log(coche.marca);
console.log(coche.vender());

/* ordenar métodos */
coche.vender();
coche.pintar();
/* cambiar valor */
coche.yeat=2021;


//----------OTRAS FORMA DEF OBJETOS
const coche2 = {};

coche2.marca ="mazda";
coche2.modelo = "cx5";

//-------------OTRA FORMA DEF OBJETOS: si la propiedad que quiero añadir la tiene una variable
coche2["tear"] = 2020;
const propiedad = "color";
coche2[propiedad] = "rojo";

console.log (coche2);