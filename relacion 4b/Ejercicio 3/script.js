// Variables para el tablero y el estado del juego
let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = 'X';
let juegoActivo = true;

// Elemento del mensaje para mostrar el resultado
const mensaje = document.getElementById('mensaje');

// Función para manejar el clic en una celda
function marcarCelda(indice) {
    // Verifica si el juego está activo y si la celda está vacía
    if (juegoActivo && tablero[indice] === '') {
        tablero[indice] = jugadorActual;
        document.getElementsByClassName('celda')[indice].innerText = jugadorActual;
        
        // Verifica si hay un ganador o empate
        verificarResultado();
        
        // Alterna entre los jugadores
        jugadorActual = (jugadorActual === 'X') ? 'O' : 'X';
    }
}

// Función para verificar si hay un ganador o un empate
function verificarResultado() {
    // Posiciones ganadoras posibles
    const combinacionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Verifica si alguna combinación ganadora se ha logrado
    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            juegoActivo = false;
            mensaje.innerText = `¡Jugador ${tablero[a]} gana!`;
            return;
        }
    }

    // Verifica si hay empate
    if (!tablero.includes('')) {
        juegoActivo = false;
        mensaje.innerText = '¡Empate!';
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    jugadorActual = 'X';
    juegoActivo = true;
    mensaje.innerText = '';
    
    // Limpia el contenido de cada celda en el HTML
    const celdas = document.getElementsByClassName('celda');
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].innerText = '';
    }
}
