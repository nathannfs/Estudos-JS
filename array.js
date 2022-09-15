// acessar valores de array, usamos índice para acessar os valores de um array, lembrando que o primeiro índice do elemento de um array é sempre 0
var funcionarios = [
    "Nathan", // indice 0
    "Bela", // indice 1
    "Ana Cláudia", // indice 2
    "José Ferreira" // indice 3
]

console.log(funcionarios[3]); // José Ferreira

// se tentar acessar um elemento do array usando um índice que não existe no array, será retornado undefined

// obtendo a soma das notas para calcular a média
var notas_bimestre = [
    7, 6, 8, 5
]

var total_notas = notas_bimestre.length;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5

// alterando um valor do array
var disciplinas = [
    "Português",
    "Matemática",
    "História",
    "Geografia",
    "Química",
    "Física",
    "Inglês"
]

disciplinas[6] = "Francês";

console.log(disciplinas); // O valor do útlimo elemento do array é mudado para "Francês"

// imprimindo o tamanho do array - muito utilizado para saber quantos elementos possui dentro de um array
console.log(disciplinas.length); // 7