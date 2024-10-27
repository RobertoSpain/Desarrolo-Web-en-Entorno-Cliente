// Inicializa el mapa
const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let userMarker = null;
let totalDistance = 0;
let lastPosition = null;

function funcionParaError(error) {
    let errorMessage;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage = "Permiso denegado. No se puede acceder a la geolocalización.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage = "La posición está indisponible. Intenta de nuevo más tarde.";
            break;
        case error.TIMEOUT:
            errorMessage = "La solicitud de geolocalización ha expirado. Intenta de nuevo.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage = "Se ha producido un error desconocido.";
            break;
        default:
            errorMessage = "Error en la geolocalización.";
    }
    alert(errorMessage); // Muestra un mensaje de alerta al usuario
    console.error("Error de geolocalización:", errorMessage);
}

function muestraPosicion(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    // Actualiza el mapa y el marcador
    if (userMarker) {
        const newLatLng = L.latLng(lat, lon);
        totalDistance += map.distance(lastPosition, newLatLng); // Calcula la distancia recorrida
        userMarker.setLatLng(newLatLng);
    } else {
        userMarker = L.marker([lat, lon]).addTo(map)
            .bindPopup('Estás aquí!')
            .openPopup();
        map.setView([lat, lon], 13);
    }

    lastPosition = L.latLng(lat, lon); // Guarda la última posición
    document.getElementById('distance').innerText = `Distancia recorrida: ${totalDistance.toFixed(2)} m`; // Muestra la distancia
}

// Configura la geolocalización solo una vez
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            muestraPosicion(position); // Muestra la posición inicial
            navigator.geolocation.watchPosition(
                muestraPosicion,
                funcionParaError,
                {
                    enableHighAccuracy: true,
                    maximumAge: 100000, // Mantiene la posición en caché por 10 segundos
                    timeout: 5000
                }
            );
        },
        funcionParaError,
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000
        }
    );
} else {
    alert("La geolocalización no es soportada en este navegador.");
}

// Función para calcular la distancia entre dos puntos
function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'miles') {
    let theta = longitude1 - longitude2;
    let distance = 60 * 1.1515 * (180 / Math.PI) * Math.acos(
        Math.sin(latitude1 * (Math.PI / 180)) * Math.sin(latitude2 * (Math.PI / 180)) +
        Math.cos(latitude1 * (Math.PI / 180)) * Math.cos(latitude2 * (Math.PI / 180)) * Math.cos(theta * (Math.PI / 180))
    );
    if (unit === 'miles') {
        return Math.round(distance);
    } else if (unit === 'kilometers') {
        return Math.round(distance * 1.609344);
    }
}

