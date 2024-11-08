// Crea una pagina web que haciendo uso de eventos permita arrstrar una imagen haciendo uso del raton
//(al pulsar sobre la  imagen la voy arrstrando hasta que suelto el boton)

const img = document.getElementById('gatitos');
let isDragging = false;

// Al pulsar sobre la imagen, inicia el arrastre
img.addEventListener('mousedown', (e) => {
    isDragging = true; // Marca que estamos arrastrando
});

// Al mover el ratón, mueve la imagen si está en arrastre
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        img.style.left = `${e.pageX - img.width / 2}px`; 
        img.style.top = `${e.pageY - img.height / 2}px`; 
    }
});

// Al soltar el botón, detiene el arrastre
document.addEventListener('mouseup', () => {
    isDragging = false; 
});

