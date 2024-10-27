//6 Crea una funcion para calcular potencias en modo recursivo.

function potencia(base, exponente) {
    // Caso base: cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }
    // Caso recursivo: base^exponente = base * base^(exponente - 1)
    return base * potencia(base, exponente - 1);
}

console.log(potencia(2, 3)); // Resultado: 8 (2^3)
console.log(potencia(5, 0)); // Resultado: 1 (5^0)
console.log(potencia(3, 4)); // Resultado: 81 (3^4)
