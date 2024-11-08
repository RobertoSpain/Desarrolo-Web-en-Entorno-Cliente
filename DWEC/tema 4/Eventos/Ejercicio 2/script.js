// Variables para el display y números actuales
let display = document.getElementById('display');
let numeroActual = '';
let numeroAnterior = '';
let operacion = null;

function agregarNumero(numero) {
    // Evita que se agregue más de un punto decimal
    if (numero === '.' && numeroActual.includes('.')) return;
    numeroActual += numero;
    actualizarDisplay();
}

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

    numeroActual = resultado;
    operacion = null;
    numeroAnterior = '';
    actualizarDisplay();
}

function limpiarDisplay() {
    numeroActual = '';
    numeroAnterior = '';
    operacion = null;
    actualizarDisplay();
}


document.getElementById("calculadora").addEventListener("click",(e)=>{
    console.log(""+e.target.addEventListener.text)
})
