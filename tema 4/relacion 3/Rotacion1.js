// Detecta el evento de rotación del dispositivo
window.addEventListener('deviceorientation', (event) => {
    const alpha = event.alpha;
        document.getElementById("myDIV").style.transform = `rotate(${alpha}deg)`;
});
