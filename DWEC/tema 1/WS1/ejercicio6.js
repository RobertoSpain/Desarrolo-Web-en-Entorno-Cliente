let numero1 = parseFloat((prompt("ingresa el primer numero ")));
let numero2 = parseFloat(prompt(("ingresa el segundo numero ")));

let resultado;
if (numero1 > numero2){
    resultado = "El numero mayor es: " + numero1;
}else if (numero2 > numero1){
    resultado = "El numero mayor es: " + numero2;
}else {
    resultado = "Los numeros son iguales: " + numero1;
}

alert(resultado);
console.log(resultado);