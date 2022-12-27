addEventListener("DOMContentLoaded", (e) =>{
   
    // Preguntamos al usuario si quiere el huevo frito
let huevo = prompt("¿Quieres el huevo frito?");

// Cocinamos el huevo de acuerdo a lo que el usuario eligió
if (huevo === "si") {
  console.log("Cocinando el huevo frito...");
} else {
  console.log("Cocinando el huevo hervido...");
}

// Preguntamos al usuario si quiere sal en el huevo
let sal = prompt("¿Quieres sal en el huevo?");

// Agregamos sal al huevo si el usuario lo eligió
if (sal==="si") {
  console.log("Agregando sal al huevo...");
  console.log("Sirviendo el huevo en el plato...")
}else{
  console.log("Sirviendo el huevo en el plato...")
}



})