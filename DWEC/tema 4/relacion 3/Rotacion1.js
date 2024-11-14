window.addEventListener('deviceorientation', (event) => {
    const alpha = event.alpha;
    const beta = event.beta;
    const gamma = event.gamma;
    console.log(`alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);
    document.getElementById("myDIV").style.transform = `rotate(${alpha}deg)`;
});
