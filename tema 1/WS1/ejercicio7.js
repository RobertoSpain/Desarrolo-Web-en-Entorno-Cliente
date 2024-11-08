let nota = parseFloat(prompt("Ingrese la nota numerica:" ));
let resultado;

if (isNaN(nota)){
    resultado = "Ingresa un numero valido";
}else if (nota < 5){
    resultado = "Suspenso";
}else if (nota <7){
    resultado = "Aprobado";
}else if(nota <9){
    resultado = "Notable";
}else if (nota <=10){
    resultado = "Sobresaliente";
}else{
    resultado = "La nota debe de estar entre 0 y 10";
}

alert(resultado);
console.log(resultado);