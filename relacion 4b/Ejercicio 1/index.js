let vidas = 3; 
let dificultad = "facil"; 

window.onload = () => {
    iniciaPartida(); 

    // Configura el botón para generar nuevos colores
    document.getElementById("nuevoColor").addEventListener("click", () => {
        console.log("Nuevos colores generados");
        iniciaPartida();
    });

    // Configura los botones de dificultad
    document.getElementById("facil").addEventListener("click", () => {
        dificultad = "facil"; 
        iniciaPartida();
    });
    
    document.getElementById("dificil").addEventListener("click", () => {
        dificultad = "dificil"; 
        iniciaPartida();
    });
};

// Función para iniciar la partida
function iniciaPartida() {
    vidas = 3; 
    document.getElementById("vidas").innerText = "Vidas restantes: " + vidas; 
    let listaDivs = document.getElementsByClassName("cuadrado");
    
    // Asigna un color aleatorio a cada cuadrado
    for (let cuadrado of listaDivs) {
        cuadrado.style.backgroundColor = randomColor();
        cuadrado.addEventListener("click", compruebaSiAcierto);
    }

    // Selecciona el color objetivo aleatorio
    let posSolucion = Math.floor(Math.random() * listaDivs.length);
    let colorSolucion = listaDivs[posSolucion].style.backgroundColor;
    document.getElementById("colorBuscar").innerText = colorSolucion;
}

// Función para comprobar si el jugador acertó
function compruebaSiAcierto(e) {
    let colorElegido = e.target.style.backgroundColor;
    let colorObjetivo = document.getElementById("colorBuscar").innerText;

    if (colorElegido === colorObjetivo) {
        console.log("¡Correcto! Has encontrado el color.");
        alert("¡Correcto! Has encontrado el color.");
        iniciaPartida(); 
    } else {
        vidas--; 
        document.getElementById("vidas").innerText = "Vidas restantes: " + vidas;

        if (vidas > 0) {
            console.log("Incorrecto, intenta de nuevo.");
            alert("Incorrecto, intenta de nuevo.");
        } else {
            console.log("Game Over");
            alert("Game Over. ¡Intenta de nuevo!");
            iniciaPartida(); 
        }
    }
}

// Función para generar un color RGB aleatorio con rango ajustado según dificultad
function randomColor() {
    let range = dificultad === "facil" ? 256 : 100; 
    let r = Math.floor(Math.random() * range);
    let g = Math.floor(Math.random() * range);
    let b = Math.floor(Math.random() * range);

    // Si estamos en modo difícil, sumamos un valor base a cada componente para hacer colores similares
    if (dificultad === "dificil") {
        let baseColor = Math.floor(Math.random() * 156) + 100; 
        r += baseColor;
        g += baseColor;
        b += baseColor;
    }

    return `rgb(${r}, ${g}, ${b})`; 
}
