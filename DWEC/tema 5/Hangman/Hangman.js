// Variables globales
let palabras = ["bangkok", "estocolmo", "cracovia", "berlin", "oporto" , "tokio" , "madrid" , "malaga" , "londres" , "miami"];
let palabraSeleccionada;
let vidas = 10;
let letrasUsadas = [];
let palabraMostrada = [];

// Función para iniciar el juego
function iniciarJuego() {
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    vidas = 10;
    letrasUsadas = [];
    palabraMostrada = Array(palabraSeleccionada.length).fill("_");
    document.getElementById("wordDisplay").textContent = palabraMostrada.join(" ");
    document.getElementById("lives").textContent = `Tienes ${vidas} vidas`;
    generarAlfabeto();
}

// Función para crear los botones de letras
function generarAlfabeto() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetContainer = document.getElementById("alphabet");
    alphabetContainer.innerHTML = "";
    alphabet.split("").forEach(letra => {
        const button = document.createElement("button");
        button.classList.add("letter");
        button.textContent = letra;
        button.onclick = () => adivinarLetra(letra);
        alphabetContainer.appendChild(button);
    });
}

// Función para adivinar una letra
function adivinarLetra(letra) {
    if (letrasUsadas.includes(letra)) return;

    letrasUsadas.push(letra);
    if (palabraSeleccionada.includes(letra)) {
        for (let i = 0; i < palabraSeleccionada.length; i++) {
            if (palabraSeleccionada[i] === letra) {
                palabraMostrada[i] = letra;
            }
        }
    } else {
        vidas--;
    }
    
    actualizarPantalla();
    verificarEstadoJuego();
}

// Actualizar el estado del juego en pantalla
function actualizarPantalla() {
    document.getElementById("wordDisplay").textContent = palabraMostrada.join(" ");
    document.getElementById("lives").textContent = `Tienes ${vidas} vidas`;
}

// Verificar si el juego ha terminado
function verificarEstadoJuego() {
    if (palabraMostrada.join("") === palabraSeleccionada) {
        alert("¡Ganaste! La palabra era " + palabraSeleccionada);
        iniciarJuego();
    } else if (vidas <= 0) {
        alert("Perdiste. La palabra era " + palabraSeleccionada);
        iniciarJuego();
    }
}

// Función para reiniciar el juego
function resetGame() {
    iniciarJuego();
}

// Iniciar el juego al cargar la página
window.onload = iniciarJuego;
