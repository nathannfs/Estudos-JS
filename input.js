//input permite receber um valor do usuário e guardar, possibilitando de construir aplicações dinâmicas. Utilizamos o readline-sync para implementar inputs em nossos projetos JS no node, através dele conseguimos construir aplicações dinâmicas de linha de comando
/* exemplo: import entradaDados from 'readline-sync'; //importando o plugin

let nome = entradaDados.question('Digite seu nome: '); //aqui pedimos ao usuário para que digite o nome dele
console.log("Olá, " + nome); */

//Nota: Devido a uma limitação do Windows, caracteres acentuados podem não ser exibidos corretamente no prompt de comando (cmd). Esse não é um problema do readline-sync e sim do Windows. Para resolvê-lo, execute o comando chcp 65001 no prompt de comando e a aplicação passará a exibir a acentuação corretamente.

//importando o readline-sync
// import apelido from 'nome-do-plugin' - apelido é a forma como chamamos o plugin no projeto, ele funciona como uma variável que armazena todo o conteúdo do plugin, através desse apelido chamamos todos os recursos do plugin - from é a palavra chave que permite informar qual plugin queremos chamar - 'nome-do-plugin' é o nome do plugin que iremos importar, neste caso é 'readline-sync'

//implementação do input
//para implementar o input, precisamos acessar uma função que se chama 'question' que faz parte do readline-sync
// exemplo : let variavel = entradaDados.question("Mensagem");
//declaramos uma variável para armazenar o valor digitado pelo usuário, em seguida utilizamos o apelido definido no import para chamar o plugin, através dele chamamos a função 'question' pois ele que implementa o input e ele recebe como parâmetro uma mensagem que será exibido para o usuário antes do input

//Tratando números
//todo valor inserido no input é convertido em string, por isso na hora de fazer cálculo matemático utilizamos um recurso nativo do JS, uma função chamada 'Number()'
import entradaDados from 'readline-sync';

console.log("Calculadora de soma entre x e y: \n");

let x = entradaDados.question("Informe o valor de x: ");
let y = entradaDados.question("Informe o valor de y: ");

let soma = Number(x) + Number(y);

console.log(x + " + " + y + " = " + soma);
//só é necessário usar essa função para converter em número, quando for utilizar soma, em operações de subtração, divisão e multiplicação o JS converte automaticamente o valor de string para número