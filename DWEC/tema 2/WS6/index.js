//2 Crea una pagina que contenga varios enlaces, imagenes y anclas del ejemplo y añade una serie de enlaces que realicen lo siguiente:
// 2C muestre el numero de imagenes del documento
// 2d muestra el id de la primera imagen
// 2e muestra el numero de enlaces del documento
// 2f Muestra el numero de enlaces del documento
// Funciones para mostrar la información solicitada

// Mostrar el número de imágenes en el documento
function showImageCount() {
    const imageCount = document.getElementsByTagName('img').length;
    document.getElementById('imageCount').textContent = `Número de imágenes: ${imageCount}`;
}

// Mostrar el ID de la primera imagen
function showFirstImageId() {
    const firstImage = document.getElementsByTagName('img')[0];
    const firstImageId = firstImage ? firstImage.id : 'No hay imágenes en el documento.';
    document.getElementById('firstImageId').textContent = `ID de la primera imagen: ${firstImageId}`;
}

// Mostrar el número de enlaces en el documento
function showLinkCount() {
    const linkCount = document.getElementsByTagName('a').length;
    document.getElementById('linkCount').textContent = `Número de enlaces: ${linkCount}`;
}

// Mostrar el número de anclas en el documento
function showAnchorCount() {
    const anchorCount = document.querySelectorAll('h2[id]').length; // Contar los elementos <h2> que tienen un id
    document.getElementById('anchorCount').textContent = `Número de anclas: ${anchorCount}`;
}

// Añadir eventos a los botones
document.getElementById('showImageCount').addEventListener('click', showImageCount);
document.getElementById('showFirstImageId').addEventListener('click', showFirstImageId);
document.getElementById('showLinkCount').addEventListener('click', showLinkCount);
document.getElementById('showAnchorCount').addEventListener('click', showAnchorCount);
