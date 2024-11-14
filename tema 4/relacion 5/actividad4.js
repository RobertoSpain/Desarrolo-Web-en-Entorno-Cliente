document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");
    const signUpBtn = document.getElementById("signUpBtn");

    function validateField(field, condition) {
        if (condition) {
            field.classList.remove("error");
        } else {
            field.classList.add("error");
        }
        return condition;
    }

    form.addEventListener("input", () => {
        const isFirstNameValid = validateField(firstName, firstName.value.trim() !== "");
        const isLastNameValid = validateField(lastName, lastName.value.trim() !== "");
        const isPhoneValid = validateField(phone, /^[0-9-+\s()]{10,}$/.test(phone.value));
        const isEmailValid = validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
        const isPasswordValid = validateField(password, password.value.length >= 6);
        const isConfirmPasswordValid = validateField(confirmPassword, password.value === confirmPassword.value);
        const isTermsChecked = terms.checked;

        signUpBtn.disabled = !(
            isFirstNameValid &&
            isLastNameValid &&
            isPhoneValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmPasswordValid &&
            isTermsChecked
        );
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Formulario enviado con éxito");
    });
});
