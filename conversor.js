import conversorMilhas from 'readline-sync';

console.log("Conversor de Milhas para Quilômetros: \n");
let milhas = conversorMilhas.question('Informe o valor em Milhas: ');

let resultado = (milhas / 0.60934).toFixed(2);

console.log(milhas + " mi equivale a " + resultado + " Km");
