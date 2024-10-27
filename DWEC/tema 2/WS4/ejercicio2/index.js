// Función para agregar filas a la tabla
function addRow(propiedad, valor) {
    const table = document.getElementById("screenInfoTable");
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = propiedad;

    const cell2 = document.createElement("td");
    cell2.textContent = valor;

    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
}

// Extraer la información de la pantalla y añadirla a la tabla
const screenInfo = {
    'Ancho de la pantalla': screen.width,
    'Altura de la pantalla': screen.height,
    'Profundidad de color': screen.colorDepth,
    'Ancho de la ventana': window.innerWidth,
    'Altura de la ventana': window.innerHeight,
    'Orientación de la pantalla': screen.orientation ? screen.orientation.type : 'No disponible',
    'Escala de pantalla': window.devicePixelRatio,
    'Resolución de la pantalla': `${screen.availWidth} x ${screen.availHeight}`,
};

// Añadir la información de la pantalla a la tabla
for (let prop in screenInfo) {
    addRow(prop, screenInfo[prop]);
}
