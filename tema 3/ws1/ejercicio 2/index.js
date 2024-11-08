//2 Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.
// Para ello define una funcion "Lanzamiento" que devuelve un numero aleatorio entre 1 y 6

function lanzamiento() {
    // Generar un número aleatorio entre 1 y 6
    var resultado = Math.floor(Math.random() * 6) + 1;
    // Mostrar el resultado en el div
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

