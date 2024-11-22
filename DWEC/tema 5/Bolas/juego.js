window.onload = () => {
    const svg = document.querySelector("svg");
    const limiteX = 900;
    const limiteY = 900;
    const numeroDeBolas = 100;
    const bolas = [];

    // Generar bolas con propiedades aleatorias
    for (let i = 0; i < numeroDeBolas; i++) {
        const radio = Math.random() * 20 + 10;
        const posicionX = Math.random() * (limiteX - 2 * radio) + radio;
        const posicionY = Math.random() * (limiteY - 2 * radio) + radio;
        const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        const velocidadX = Math.random() * 4 + 1;
        const velocidadY = Math.random() * 4 + 1;

        // Crear elemento SVG de la bola
        const bola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bola.setAttribute("cx", posicionX);
        bola.setAttribute("cy", posicionY);
        bola.setAttribute("r", radio);
        bola.setAttribute("fill", color);
        bola.setAttribute("stroke", "black");
        bola.setAttribute("stroke-width", "1");
        svg.appendChild(bola);

        // Añadir evento para eliminar la bola al clicarla
        bola.addEventListener("click", () => {
            svg.removeChild(bola);
        });

        // Guardar propiedades de la bola
        bolas.push({
            elemento: bola,
            posicionX: posicionX,
            posicionY: posicionY,
            radio: radio,
            velocidadX: velocidadX,
            velocidadY: velocidadY,
        });
    }

    // Animar las bolas
    setInterval(() => {
        bolas.forEach((bola) => {
            // Actualizar posición
            bola.posicionX += bola.velocidadX;
            bola.posicionY += bola.velocidadY;

            // Comprobaciones de rango X
            if (bola.posicionX + bola.radio > limiteX || bola.posicionX - bola.radio < 0) {
                bola.velocidadX *= -1;
            }

            // Comprobaciones de rango Y
            if (bola.posicionY + bola.radio > limiteY || bola.posicionY - bola.radio < 0) {
                bola.velocidadY *= -1;
            }

            // Actualizar posición en el SVG
            bola.elemento.setAttribute("cx", bola.posicionX);
            bola.elemento.setAttribute("cy", bola.posicionY);
        });
    }, 30);
};

