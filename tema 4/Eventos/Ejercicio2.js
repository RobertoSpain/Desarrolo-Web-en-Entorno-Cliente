document.addEventListener('mousemove', function(event) {
    let posX = event.clientX;
    let posY = event.clientY;
    document.getElementById('posX').textContent = posX;
    document.getElementById('posY').textContent = posY;
});

//window.onload = () =>{} evento para el script de la pagina de js , si aqui creo la tabla tengo que crearlo dentro