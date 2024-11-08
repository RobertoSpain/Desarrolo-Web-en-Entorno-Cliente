// Función para calcular el factorial de un número
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Función para generar la tabla de factoriales
function generarTablaFactorial() {
    var tabla = document.getElementById('tabla-factorial');

    // Generar los factoriales del 1 al 10
    for (var i = 1; i <= 10; i++) {
        var fila = document.createElement('tr');
        var celdaNumero = document.createElement('td');
        var celdaFactorial = document.createElement('td');
        
        celdaNumero.textContent = i;
        celdaFactorial.textContent = factorial(i);

        fila.appendChild(celdaNumero);
        fila.appendChild(celdaFactorial);
        tabla.appendChild(fila);
    }
}

// Ejecutar la función para generar la tabla cuando se carga la página
window.onload = generarTablaFactorial;
