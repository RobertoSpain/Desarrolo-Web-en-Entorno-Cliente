// Utilizando setTimeout() creo un contador hacia atras de 60 segundos.

// Inicializamos el tiempo en 60 segundos
let tiempo = 60;

// Función para actualizar el contador
function actualizarContador() {
    if (tiempo >= 0) {
        // Mostrar el tiempo en el elemento HTML con id "contador"
        document.getElementById("contador").textContent = tiempo + " segundos restantes";
        
        // Reducimos el tiempo en 1 segundo
        tiempo--;
        
        // Llamamos a la función actualizarContador() después de 1 segundo (1000 milisegundos)
        setTimeout(actualizarContador, 1000);
    } else {
        // Cuando el tiempo llegue a 0, mostramos un mensaje de finalización
        document.getElementById("contador").textContent = "¡Tiempo agotado!";
    }
}

// Iniciar el contador
actualizarContador();
