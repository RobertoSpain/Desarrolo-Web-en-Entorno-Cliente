// Punto 1: Generar números aleatorios
// Número aleatorio entre 0 y 1
let numAleatorio = Math.random();
document.getElementById("random-0-1").innerHTML += numAleatorio;

// Número aleatorio entre 100 y 200
let numAleatorioBig = Math.random() * (200 - 100) + 100;
document.getElementById("random-100-200").innerHTML += numAleatorioBig;

// Número aleatorio entre dos valores dados por el usuario
function generaNumeroEntreValores() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let numAleatorioUsuario = Math.random() * (valor2 - valor1) + valor1;
    document.getElementById("random-user").innerHTML = "Número aleatorio: " + numAleatorioUsuario;
}

// Punto 5: Resolver ecuaciones de segundo grado
function resolverEcuacion() {
    let a = parseFloat(document.getElementById("coef-a").value);
    let b = parseFloat(document.getElementById("coef-b").value);
    let c = parseFloat(document.getElementById("coef-c").value);
    let discriminante = b * b - 4 * a * c;
    let resultado = "";

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultado = `Las soluciones son x1 = ${x1} y x2 = ${x2}`;
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        resultado = `La solución única es x = ${x}`;
    } else {
        resultado = "No hay soluciones reales.";
    }
    document.getElementById("resultado-ecuacion").innerHTML = resultado;
}

// Punto 7: Generar tabla de números y sus senos
function generarTablaSeno() {
    let tablaSeno = document.getElementById("tabla-seno");
    for (let i = 1; i <= 10; i++) {
        let fila = document.createElement("tr");
        let celdaNumero = document.createElement("td");
        let celdaSeno = document.createElement("td");
        celdaNumero.innerHTML = i;
        celdaSeno.innerHTML = Math.sin(i).toFixed(4); // Seno con 4 decimales
        fila.appendChild(celdaNumero);
        fila.appendChild(celdaSeno);
        tablaSeno.appendChild(fila);
    }
}
generarTablaSeno();

// Punto 8: Mostrar una imagen aleatoria
function mostrarImagenAleatoria() {
    let imagenes = [
    ];
    let indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    document.getElementById("imagen-aleatoria").src = imagenes[indiceAleatorio];
}
mostrarImagenAleatoria();

let random = Math.trunc(Math.random()*3);

const imagenes = [];
imagenes.push(ale1,ale2,ale3);
document.write(imagenes[random]);

let random1 = Math.trunc(Math.random()*3);
document.write("<img src='"+random+.gif'");