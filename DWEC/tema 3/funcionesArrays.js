//array
// let nombres = ["jose","rosa","paco"];

//function pintaNombres(n)
//{
   // console.log(n);
//}

//usando el sort 

// nombres.sort((a,b)=>{
    //if (a<b)
        //return -10;
    //else if (a>b)
       // return 27;
   // else    
        //return 0;

//})

// usando el for each
// let nombreMayusculas = nombres.map(nombre=>{
    // if (nombre == "jose")
       // return nombre.toLocaleUpperCase() + " es la leche";
    // else
       // return nombre.toUpperCase();
// });
// console.log(nombreMayusculas);

// Opcion A
//for (n of nombres)
    //console.log(nombres);

// Opcion B
//nombres.forEach((n)=>console.log(n));


// ordenar arrays de numeros

let numeros = [10,2,3,543,2,1,34];

console.log (numeros.sort((num1,num2)=>{

    if (num1<num2)
        return -1;
    else if(num1>num2)
        return +1;
        else
            return 0;
}))