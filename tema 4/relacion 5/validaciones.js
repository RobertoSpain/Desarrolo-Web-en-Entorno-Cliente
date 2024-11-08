function validarMayuscula(texto){
    const regex = /[A-Z]/;
    return regex.test(texto)
}

function validarCaracteresEspeciales(texto){
    const regex = /[!@#$%^&]/
    return regex.test(texto)
}

function validarCorreo(correo) {
    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

function validarTarjetaCredito(tarjeta) {
    const regex = /^(\d{4}[-\s]?){3}\d{4}$/;
    return regex.test(tarjeta);
}

function validarLongitud(texto) {
    return texto.length >= 8;
}

function validarNumero(texto) {
    const regex = /\d/;
    return regex.test(texto);
}