1//Muestra, maquetada en una tabla HTML toda la informacion que puedas extraer mediante JavaScript del navegador cliente.

// Función para agregar filas a la tabla
function addRow(propiedad, valor) {
    const table = document.getElementById("infoTable");
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = propiedad;

    const cell2 = document.createElement("td");
    cell2.textContent = valor;

    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
}

// Extraer la información del navegador y añadirla a la tabla
const info = {
    'Idioma': navigator.language,
    'Plataforma': navigator.platform,
    'Versión del Usuario': navigator.userAgent,
    'Online': navigator.onLine,
    'Cookies habilitadas': navigator.cookieEnabled,
    'Java habilitado': navigator.javaEnabled(),
    'Ancho de pantalla': screen.width,
    'Altura de pantalla': screen.height,
    'Profundidad de color': screen.colorDepth,
    'Ancho de la ventana': window.innerWidth,
    'Altura de la ventana': window.innerHeight,
    'Tiempo en la zona horaria': new Date().toString(),
    'Nombre del navegador': navigator.appName,
    'Versión del navegador': navigator.appVersion,
    'Vendor del navegador': navigator.vendor,
    'Ubicación geográfica': ''
};

// Intentar obtener la ubicación geográfica
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        info['Ubicación geográfica'] = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`;
        for (let prop in info) {
            addRow(prop, info[prop]);
        }
    });
} else {
    for (let prop in info) {
        addRow(prop, info[prop]);
    }
}



2// Realiza lo mismo para la informacion de la pantalla utilizada por el cliente