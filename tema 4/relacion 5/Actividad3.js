document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const submitBtn = document.getElementById("submitBtn");

    const lowercaseRequirement = document.getElementById("lowercase");
    const uppercaseRequirement = document.getElementById("uppercase");
    const minLengthRequirement = document.getElementById("minLength");

    usernameInput.addEventListener("input", () => {
        const value = usernameInput.value;

        // Validación de cada requisito
        const hasLowercase = /[a-z]/.test(value);
        const hasUppercase = /[A-Z]/.test(value);
        const hasMinLength = value.length >= 6;

        // Actualizar el estilo de los elementos de la lista
        lowercaseRequirement.classList.toggle("valid", hasLowercase);
        uppercaseRequirement.classList.toggle("valid", hasUppercase);
        minLengthRequirement.classList.toggle("valid", hasMinLength);

        // Habilitar o deshabilitar el botón de enviar
        submitBtn.disabled = !(hasLowercase && hasUppercase && hasMinLength);
    });
});
