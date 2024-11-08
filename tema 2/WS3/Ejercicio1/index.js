// Crea las siguientes funciones y llamalas desde una pagina XHTML para mostrar su funcionamiento:
// a). invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario.


function invierteCadena(cad_arg) {
    let cadenaInvertida = "";
    for (let i = cad_arg.length - 1; i >= 0; i--) {
        cadenaInvertida += cad_arg[i];
    }
    return cadenaInvertida;
}

//b.

function InviertePalabras(cadena){
    let resultado ="";
    let cadenaTrasSplit = cadena.split("");
    for (let i=0; i<cadenaTrasSplit.length; i++)
        document.write += invierteCadena(cadenaTrasSplit[i])+" ";

    return resultado;
}
document.write(inviertePalabras("Ejercicio segundo"));

//c.

function encuentraPalabrasMasLarga(cad_arg){
    let palabras = cad_arg.split("");
    let Larga = palabras[0];

    for(let i= 0; i < palabras.length; i++){
        if (palabras[i].length > Larga.length){
            Larga = palabras[i];
        }
    }
    return Larga;
}

document.write(encuentraPalabrasMasLarga("Hola mundo patatas"));
document.write("<br>");

//document.write(invierteCadena(prompt)("Escribe cadena al invertir"));

//d  filtraPalabrassMasLargas(cad_arg, i): para una cadena de caracteres y un valor numerico (i), devuelva el umero de palabras cuya longitud es mayor a i "JAVI ESTA DESEANDO IRSE, 4"

function PalabrasMasLarga(cad_arg){
    let cadena = prompt("Introduce una frase:"); 
    let longitud = 4; 
    let palabras = cadena.split("");
    let palabralarga = palabras[0];

    for(let i= 0; i < palabras.length; i++){
        if(palabras[i].length > palabralarga){
            palabralarga = palabras[i];
        }

    }
    return palabralarga;
}

document.write(filtraPalabrassMasLargas("Hay un Coche verde"))
document.write("<br>")
