// Variables para el display y números actuales
let display = document.getElementById('display');
let numeroActual = '';
let numeroAnterior = '';
let operacion = null;

// Función para agregar un número al display
function agregarNumero(numero) {
    // Evita que se agregue más de un punto decimal
    if (numero === '.' && numeroActual.includes('.')) return;
    numeroActual += numero;
    actualizarDisplay();
}

// Función para actualizar el display
function actualizarDisplay() {
    display.value = numeroActual;
}

// Función para establecer la operación (suma, resta, etc.)
function establecerOperacion(op) {
    if (numeroActual === '') return; 
    if (numeroAnterior !== '') {
        calcular(); 
    }
    operacion = op;
    numeroAnterior = numeroActual;
    numeroActual = '';
}

// Función para realizar el cálculo
function calcular() {
    let resultado;
    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);

    if (isNaN(anterior) || isNaN(actual)) return; 

    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = anterior / actual;
            break;
        default:
            return;
    }

    // Actualiza el número actual con el resultado y reinicia la operación
    numeroActual = resultado;
    operacion = null;
    numeroAnterior = '';
    actualizarDisplay();
}

// Función para limpiar el display y reiniciar variables
function limpiarDisplay() {
    numeroActual = '';
    numeroAnterior = '';
    operacion = null;
    actualizarDisplay();
}


document.getElementById("calculadora").addEventListener("click",(e)=>{
    console.log(""+e.target.addEventListener.text)
})