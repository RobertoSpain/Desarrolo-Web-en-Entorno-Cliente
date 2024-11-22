// Clase para la pelota
class Pelota {
    constructor(svg, x, y, radio, dx, dy) {
        this.svg = svg;
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.dx = dx;
        this.dy = dy;
        this.circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circulo.setAttribute("cx", this.x);
        this.circulo.setAttribute("cy", this.y);
        this.circulo.setAttribute("r", this.radio);
        this.circulo.setAttribute("fill", "#0095DD");
        svg.appendChild(this.circulo);
        this.contadorToques = 0; 
    }

    mover() {
        this.x += this.dx;
        this.y += this.dy;
        this.circulo.setAttribute("cx", this.x);
        this.circulo.setAttribute("cy", this.y);
    }

    reboteX() {
        this.dx = -this.dx;
        this.contadorToques++; 
        if (this.contadorToques >= 4) {
            // Aumentamos la velocidad cada 4 toques
            this.dx *= 1.1; 
            this.dy *= 1.1; 
            this.contadorToques = 0; 
        }
    }

    reboteY() {
        this.dy = -this.dy;
    }

    reiniciar(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.circulo.setAttribute("cx", this.x);
        this.circulo.setAttribute("cy", this.y);
    }
}

// Clase para las barras
class Barra {
    constructor(svg, x, y, ancho, altura, color) {
        this.svg = svg;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.altura = altura;
        this.color = color;
        this.barra = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.barra.setAttribute("x", this.x);
        this.barra.setAttribute("y", this.y);
        this.barra.setAttribute("width", this.ancho);
        this.barra.setAttribute("height", this.altura);
        this.barra.setAttribute("fill", this.color);
        svg.appendChild(this.barra);
    }

    mover(y) {
        this.y = y;
        this.barra.setAttribute("y", this.y);
    }
}

window.onload = () => {
    const svg = document.getElementById("juegoPong");
    const limiteX = 580;
    const limiteY = 580;

    // Crear la pelota
    const pelota = new Pelota(svg, limiteX / 2, limiteY / 2, 10, 4, 4);

    // Crear las barras
    const barraJugador = new Barra(svg, limiteX - 10, (limiteY - 100) / 2, 10, 100, "#0095DD");
    const barraComputadora = new Barra(svg, 0, (limiteY - 100) / 2, 10, 100, "#0095DD");

    // Crear el marcador de puntos
    let puntosJugador = 0;
    let puntosComputadora = 0;
    const marcador = document.createElement("div");
    marcador.style.fontSize = "24px";
    marcador.style.color = "#333";
    marcador.style.textAlign = "center";
    marcador.style.position = "absolute";
    marcador.style.top = "20px";
    marcador.style.width = "100%";
    marcador.innerHTML = `Jugador: ${puntosJugador} - Computadora: ${puntosComputadora}`;
    document.body.appendChild(marcador);

    // Función para actualizar el marcador
    function actualizarMarcador() {
        marcador.innerHTML = `Jugador: ${puntosJugador} - Computadora: ${puntosComputadora}`;
    }

    let velocidadBarra = 10;
    let teclaArriba = false;
    let teclaAbajo = false;

    // Función para mover las barras del jugador
    document.addEventListener("keydown", (e) => {
        if (e.key == "ArrowUp") teclaArriba = true;
        if (e.key == "ArrowDown") teclaAbajo = true;
    });

    document.addEventListener("keyup", (e) => {
        if (e.key == "ArrowUp") teclaArriba = false;
        if (e.key == "ArrowDown") teclaAbajo = false;
    });

    // Función para mover la pelota, las barras y comprobar rebotes
    const mover = () => {
        pelota.mover();

        // Rebote en los bordes verticales (arriba y abajo)
        if (pelota.y + pelota.radio > limiteY || pelota.y - pelota.radio < 0) {
            pelota.reboteY();
        }

        // Rebote en la barra de la computadora (lado izquierdo)
        if (pelota.x - pelota.radio < 10) {
            if (pelota.y > barraComputadora.y && pelota.y < barraComputadora.y + barraComputadora.altura) {
                pelota.reboteX();
            }
        }

        // Rebote en la barra del jugador (lado derecho)
    else if (pelota.x + pelota.radio > limiteX - 10) {
    if (pelota.y > barraJugador.y && pelota.y < barraJugador.y + barraJugador.altura) {
        pelota.reboteX();
    } else if (pelota.y + pelota.radio > barraJugador.y + barraJugador.altura) {
        // Si la pelota pasa por debajo de la barra, es gol para la computadora
        puntosComputadora++;
        actualizarMarcador();  // Actualizar el marcador
        pelota.reiniciar(limiteX / 2, limiteY / 2, 4, 4);
    } else {
        // La pelota no toca la barra
        // El jugador pierde un punto
        puntosComputadora++;
        actualizarMarcador();  
        pelota.reiniciar(limiteX / 2, limiteY / 2, 4, 4);
    }
}

        // Mover barra del jugador
        if (teclaArriba && barraJugador.y > 0) {
            barraJugador.mover(barraJugador.y - velocidadBarra);
        }

        if (teclaAbajo && barraJugador.y < limiteY - barraJugador.altura) {
            barraJugador.mover(barraJugador.y + velocidadBarra);
        }

        // Mover barra de la computadora (sigue la pelota) y limitar su movimiento
        if (pelota.y > barraComputadora.y + barraComputadora.altura / 2) {
            if (barraComputadora.y + barraComputadora.altura < limiteY) {
                barraComputadora.mover(barraComputadora.y + velocidadBarra);
            }
        } else if (pelota.y < barraComputadora.y + barraComputadora.altura / 2) {
            if (barraComputadora.y > 0) {
                barraComputadora.mover(barraComputadora.y - velocidadBarra);
            }
        }

        // La computadora pierde un punto cuando la pelota pasa por su lado
        if (pelota.x - pelota.radio < 0) {
            puntosJugador++;
            actualizarMarcador();  
            pelota.reiniciar(limiteX / 2, limiteY / 2, 4, 4);
        }
    };

    // Bucle de animación
    setInterval(mover, 1000 / 60); 
};
