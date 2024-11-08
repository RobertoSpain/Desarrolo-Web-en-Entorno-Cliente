//10 Mejora el ejercicio anterior para que se pueda hacer en una pagina con un numero cualquiera de imagenes

const images = document.querySelectorAll('.gatitos'); 
let isDragging = false; 
let currentImg; 
let offsetX, offsetY; 

// Recorre cada imagen y añade los eventos necesarios
images.forEach((img) => {
    img.addEventListener('mousedown', (e) => {
        isDragging = true; 
        currentImg = img; 
        offsetX = e.offsetX; 
        offsetY = e.offsetY; 
    });
});

// Al mover el ratón, mueve la imagen si está en arrastre
document.addEventListener('mousemove', (e) => {
    if (isDragging && currentImg) {
        currentImg.style.left = `${e.pageX - offsetX}px`; 
        currentImg.style.top = `${e.pageY - offsetY}px`; 
    }
});

// Al soltar el botón, detiene el arrastre
document.addEventListener('mouseup', () => {
    isDragging = false; 
    currentImg = null; 
});
