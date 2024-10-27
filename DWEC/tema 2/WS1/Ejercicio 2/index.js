//Crea una pagina web en la que se muestre el resultado de cada uno de los siguientes apartados:
// a.Crear variable "fechaHoy" con fecha de hoy
// b. Crear variable "fecha85" que sume 85 dias a la variable "fechaHoy"
// c. Crear variable "fecha 187" que reste 187 dias variable "fechaHoy"
// d. Sumar 2 anios a la variable "fecha85"
// e. restar 24 horas a la variable "fecha 187"
// f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha 187 y observa lo que tienes

// a. Fecha de hoy
let fechaHoy = new Date();
document.getElementById("fechaHoy").textContent = fechaHoy.toLocaleString();

// b. Sumar 85 días a "fechaHoy"
let fecha85 = new Date(fechaHoy);
fecha85.setDate(fecha85.getDate() + 85);
document.getElementById("fecha85").textContent = fecha85.toLocaleString();

// c. Restar 187 días a "fechaHoy"
let fecha187 = new Date(fechaHoy);
fecha187.setDate(fecha187.getDate() - 187);
document.getElementById("fecha187").textContent = fecha187.toLocaleString();

// d. Sumar 2 años a "fecha85"
let fecha85Plus2Years = new Date(fecha85);
fecha85Plus2Years.setFullYear(fecha85Plus2Years.getFullYear() + 2);
document.getElementById("fecha85Plus2Years").textContent = fecha85Plus2Years.toLocaleString();

// e. Restar 24 horas (1 día) a "fecha187"
let fecha187Minus24Hours = new Date(fecha187);
fecha187Minus24Hours.setDate(fecha187Minus24Hours.getDate() - 1);
document.getElementById("fecha187Minus24Hours").textContent = fecha187Minus24Hours.toLocaleString();

// f. Resta entre "fecha85" y "fecha187" (diferencia en milisegundos)
let diferencia = fecha85 - fecha187;
let fechaResto = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Convertir de milisegundos a días
document.getElementById("fechaResto").textContent = fechaResto + " días";
