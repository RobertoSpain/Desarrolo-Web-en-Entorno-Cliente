//5 Usando el objeto DATE, sus metodos getHours, getMinutes y GetSeconds y el metodo setTimeout() crea un reloj que se actualice cada segundo.
// Función que actualiza el reloj cada segundo
function actualizarReloj() {
    // Creamos un nuevo objeto de fecha para obtener la hora actual
    let ahora = new Date();

    // Obtenemos las horas, minutos y segundos
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Formateamos las horas, minutos y segundos para que siempre tengan dos dígitos
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    // Mostramos la hora en el elemento HTML con id "reloj"
    document.getElementById("reloj").textContent = horas + ":" + minutos + ":" + segundos;

    // Llamamos a la función actualizarReloj() después de 1 segundo (1000 milisegundos)
    setTimeout(actualizarReloj, 1000);
}

// Iniciamos el reloj cuando la página cargue
actualizarReloj();
