let edadActual = parseInt(prompt("Ingresa tu edad actual "));

let edadMaxima = parseInt(prompt("Ingresa la edad maxima que esperas vivir "));

let cantidadPorDia = parseInt(prompt("Cuantos bocadillos comes al dia? "));

let aniosRestantes = edadMaxima - edadActual;
let totalBocadillos = aniosRestantes * 365 * cantidadPorDia;

alert("Necesitaras" + totalBocadillos + "  para llegar a la maxima edad " + edadMaxima + ".");
console.log("Necesitaras " + totalBocadillos + " bocadillos para llegar a la edad maxima " + edadMaxima + ".");
