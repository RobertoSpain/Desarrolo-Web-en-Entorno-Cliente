// Función para lanzar el dado una vez
function lanzamiento() {
    var resultado = Math.floor(Math.random() * 6) + 1;
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}

// Función para realizar una simulación de 6000 tiradas
function simulacion() {
    // Crear un array para contar las ocurrencias de cada valor
    var ocurrencias = [0, 0, 0, 0, 0, 0];

    // Realizar 6000 tiradas
    for (var i = 0; i < 6000; i++) {
        var resultado = Math.floor(Math.random() * 6) + 1;
        ocurrencias[resultado - 1]++; // Aumentar el contador del valor correspondiente
    }

    // Mostrar los resultados en la tabla
    for (var j = 1; j <= 6; j++) {
        document.getElementById('valor' + j).textContent = ocurrencias[j - 1];
    }

    document.getElementById('resultado').textContent = "Simulación completada. Ver tabla de resultados.";
}
