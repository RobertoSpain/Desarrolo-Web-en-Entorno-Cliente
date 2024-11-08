function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const dni = document.getElementById("dni").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("usuario").value;

    // Validación del nombre y apellidos: Solo letras y espacios
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    if (!regexNombre.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
        return false;
    }
    if (!regexNombre.test(apellidos)) {
        alert("Los apellidos solo deben contener letras y espacios.");
        return false;
    }

    // Validación del DNI: 8 dígitos seguidos de una letra
    const regexDNI = /^\d{8}[A-Z]$/;
    if (!regexDNI.test(dni)) {
        alert("El DNI debe tener el formato de 8 dígitos seguidos de una letra mayúscula.");
        return false;
    }

    // Validación del teléfono: Solo 9 dígitos
    const regexTelefono = /^\d{9}$/;
    if (!regexTelefono.test(telefono)) {
        alert("El teléfono debe contener 9 dígitos.");
        return false;
    }

    // Validación del email: Formato estándar de correo electrónico
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        alert("El formato del correo electrónico no es válido.");
        return false;
    }

    // Validación del nombre de usuario: Al menos 8 caracteres, un número y un signo de puntuación
    const regexUsuario = /^(?=.*\d)(?=.*[!@#$%^&*.,;:])[A-Za-z\d!@#$%^&*.,;:]{8,}$/;
    if (!regexUsuario.test(usuario)) {
        alert("El nombre de usuario debe tener al menos 8 caracteres, incluyendo un número y un signo de puntuación.");
        return false;
    }

    // Si todas las validaciones pasan, el formulario es válido
    alert("Formulario enviado correctamente.");
    return true;
}
