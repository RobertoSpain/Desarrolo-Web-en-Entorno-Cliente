let anoActual = new Date().getFullYear(); 
let anioNacimiento = parseInt(prompt("Ingresa tu año de nacimiento")); 

let edadEsteAnio = anoActual - anioNacimiento; 
let edadSiguienteAnio = edadEsteAnio + 1; 

alert("La edad es: " + edadEsteAnio + " o " + edadSiguienteAnio + "."); 
console.log("La edad es: " + edadEsteAnio + " o " + edadSiguienteAnio + ".");
