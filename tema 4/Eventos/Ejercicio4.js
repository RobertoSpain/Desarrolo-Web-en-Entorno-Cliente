// Ejercicio 4 y 5

// 5. añade las siguientes funcionalidades al ejercicio anterior:
// Borrado de lineas con el raton (mediante la pulsacion del boton que tu decidas)
// Borrar por completo el canvas (con un boton).

window.onload = function() {
    const canvas = document.getElementById('canvas');
    const clearButton = document.getElementById('ClearButton');

    // Crear una tabla de 100x100 celdas
    for (let i = 0; i < 100; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 100; j++) {
            const cell = document.createElement('td');
            // Añadir eventos a cada celda
            cell.addEventListener('mousemove', paintOrEraseCell);
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }

    // Evento para borrar todo el canvas al hacer clic en el botón
    clearButton.addEventListener('click', clearCanvas);
};

// Función para pintar o borrar celdas según la tecla presionada
function paintOrEraseCell(event) {
    if (event.altKey) {
        event.target.style.backgroundColor = 'white';
    } else if (event.ctrlKey) {
        event.target.style.backgroundColor = 'red';
    } else if (event.shiftKey) {
        event.target.style.backgroundColor = 'blue';
    }
}

// Función para limpiar todo el canvas
function clearCanvas() {
    const cells = document.querySelectorAll('#canvas td');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}

