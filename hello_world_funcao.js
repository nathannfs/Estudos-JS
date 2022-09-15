//usamos 'var' para declarar uma variável quando quisermos usar em um escopo global.
//usamos 'let' para declarar uma variável quando quisermos ter uma variável limitada apenas no seu escopo no bloco.
//usamos 'const' quando não queremos que essa variável seja alterada, se for criado uma variável 'const' devemos dar um valor para ela se não ocorrerá um erro, o mesmo acontece se tentarmos alterar o valor de uma variável 'const'.


var texto = "Hello World!"; //declarando uma váriavel

function imprimirTexto(textoParaImprimir) { //criando uma função e colocando um parâmetro para imprimir um texto
    console.log(textoParaImprimir); //código que vai ser executado nesta função
}

imprimirTexto(texto); //chamando a função para ser executada

console.log(typeof texto); //'typeof' mostra o tipo da váriavel, se é uma string, number ou boolean.

var estados = ['Rio de Janeiro', 'São Paulo', 'Espirito Santo']; //array permite declarar vários valores dentro de uma váriavel
console.log(estados[0]); //para mostrar apenas um dos valores da váriavel declarada em array, utiliza-se a estrutura 'nome do array + [posição do valor]', as posições de cada array começa com 0.

//podemos alterar o valor da váriavel em um array da seguinte forma
var linguagens = ['JavaScript', 'C#', 'PHP', 'Java'];
var linguagem = 'C';
linguagens[1] = linguagem; //ou linguagens[1] = 'C';
console.log(linguagens[1]);

console.log(linguagens.length); //utilizando .length depois do nome do array é possível saber a quantidade de elementos dentro de um array.

//array pode ser usado para armazenar diferentes tipos de dados
var titulo = 'Programador';
var quantidadeVagas = 5;
var vagaAtiva = true;

var vaga = ['Programador PHP', 5, true]; //a declaração de váriaveis do código acima ficaria deste jeito em forma de array.

//uma váriavel será undefined quando não for atribuído valor a ela.

//você poderá usar null ao declarar uma váriavel quando você não quiser dar um valor para ela agora, ao tentar fazer alguma conta com uma váriavel 'null', ela será lida como 0, pois o valor 'null' é considerado 0 no JavaScript.

//para usar casas depois da vírgula em números, utiliza-se 'toFixed(quantidade de casas)', exemplo:
var number = 2;
console.log(number.toFixed(2));