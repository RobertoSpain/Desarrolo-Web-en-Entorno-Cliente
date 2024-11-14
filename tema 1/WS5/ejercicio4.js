let nombre = prompt("Introduce tu nombre");
let apellidos= prompt("Introduce tus apellidos");
let edad= prompt("Introduce tu edas");
let ciclo= prompt("Introduce el ciclo que estudias");
let mensaje = "Hola esta es tu info " + nombre +"" + apellidos + "" + edad +"" +ciclo;


if(nombre,edad){
    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos);
    console.log("Edad:", edad);
    console.log("Ciclo Formativo" ,ciclo);
}else{
    console.log("Por favor, introduce todos los datos necesarios");
}

alert(mensaje);