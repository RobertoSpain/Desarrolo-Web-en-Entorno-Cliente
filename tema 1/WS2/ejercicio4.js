let temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en Celsius"));
let temperaturaFahrenheit = (temperaturaCelsius *9 / 5) + 32;

alert(temperaturaCelsius + "°C es " + temperaturaFahrenheit.toFixed(2) + "°F.");
console.log(temperaturaCelsius + "°C es " + temperaturaFahrenheit.toFixed(2) + "°F."); 

let temperaturaFahrenheitInput = parseFloat(prompt("Ingresa la temperatura en Fahrenheit:")); 

let temperaturaCelsiusConvertida = (temperaturaFahrenheitInput - 32) * (5 / 9); 

alert(temperaturaFahrenheitInput + "°F es " + temperaturaCelsiusConvertida.toFixed(2) + "°C."); 
console.log(temperaturaFahrenheitInput + "°F es " + temperaturaCelsiusConvertida.toFixed(2) + "°C."); 