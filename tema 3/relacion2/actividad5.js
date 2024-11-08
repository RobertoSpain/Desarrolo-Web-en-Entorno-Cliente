//5 Crear una funcion llamado paresImpares que cree un array de 100 numeros aleatorios del 1 al 1000. Una vez creado,
//mostrar el contenido y despues organizarlo de forma que esten juntos los elemenyos pares y impares.
//despues volver a mostrar el array

function paresImpares() {
    let array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 1000) + 1);
    }

    console.log("Array original:", array);

    let pares = array.filter(num => num % 2 === 0);
    let impares = array.filter(num => num % 2 !== 0);

    let arrayOrganizado = pares.concat(impares);

    console.log("Array organizado (pares e impares juntos):", arrayOrganizado);
}

paresImpares();
