class Persona { 
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;  
        this.estomago = [];
    }

    eat(food) {
        if (this.estomago.length < 10) {
            this.estomago.push(food);
        }
    }

    poop() {
        this.estomago = []; // Vacía el estómago
    }

    toString() {
        // Usamos backticks para interpolación de variables
        return `${this.nombre}, ${this.edad}`;
    }
}

// Prueba del código
let persona1 = new Persona("Mary", 50);
console.log(persona1.toString());  // Imprime: "Mary, 50"

persona1.eat("manzana");
persona1.eat("banana");
console.log(persona1.estomago);  // Imprime: ["manzana", "banana"]

persona1.poop();
console.log(persona1.estomago);  // Imprime: []



