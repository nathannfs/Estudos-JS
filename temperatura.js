import conversorTemp from 'readline-sync';

console.log("Conversor de Celsius para Kelvin: \n");

let celsius = conversorTemp.question("Informe o valor em Celsius: ");

let conv = Number(celsius) + 273.15;

console.log(celsius + "ºC equivale a " + conv + "K");