import triangulo from 'readline-sync';

console.log("Área do Triângulo: \n");

let base = triangulo.question("Informe a base: ");
let altura = triangulo.question("Informe a altura: ");

let area = (base * altura) / 2;

console.log("A área do triângulo é: " + area);