//1. Realiza una pagina que cree un objeto de tipo Date y muestre en la pagina la siguiente informacion (cada una en una linea):
//El anio actual
//El mes actual
//La hora actual
//Los minutos actuales
//Los segundos actuales
// Crear un objeto de tipo Date
const fechaActual = new Date();

// Obtener la información solicitada
const anio = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por eso sumamos 1
const hora = fechaActual.getHours();
const minutos = fechaActual.getMinutes();
const segundos = fechaActual.getSeconds();

// Mostrar la información en la página
document.getElementById("anio").innerText = "El año actual es: " + anio;
document.getElementById("mes").innerText = "El mes actual es: " + mes;
document.getElementById("hora").innerText = "La hora actual es: " + hora;
document.getElementById("minutos").innerText = "Los minutos actuales son: " + minutos;
document.getElementById("segundos").innerText = "Los segundos actuales son: " + segundos;
