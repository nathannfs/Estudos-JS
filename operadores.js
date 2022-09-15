//operadores são utilizados para modificar ou obter um novo valor a partir de uma ou mais variáveis.


//operadores aritméticos
//adição (+)
//subtração (-)
//multiplicação (*)
//divisão (/)
//módulo (%)
var quantidadeVagas = 2 + 5; //resultado: 7
var contratados = 7 - 2; //resultado: 5
var valorContribuicao = 2500 * 0.10; //resultado: 250
var primeiraParcela = 2500 / 2; //resultado: 1250

//o operador módulo (%), retorna o resto de uma divisão.
var resto1 = 15 % 4; //resultado: 3
var resto2 = 3 % 1.2; //resultado: 0.6

var verificaSeEPar = 20 % 2 == 0; //terá o valor true pois a divisão de 20 por 2 dá um número inteiro e resto 0.

//adição também pode ser usado para juntar strings além de somar números
console.log('texto' + ' e complemento'); //irá imprimir "texto e complemento"
console.log('5' + '6'); //irá imprimir "56"

//quando usado o operador de adição com tipos diferentes, exemplo uma string com um number, ele irá converter todos os valores para string e depois os une.
console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log([1, 2, 3] + 4) // "1,2,34"
console.log({ nome: 'José' } + 1); // “[object Object]1”

//conversão para number, true = 1; false = 0; null = 0; undefined = NaN(não é número)
console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

//para situações que precisamos gerar um novo valor e atribuí-lo a mesma variável, podemos utilizar dois jeitos
var preco = 10;
preco = preco + 20;

var preco = 20;
preco += 1; //operador (+=, -=, *=, /= ou %=), eles tem uma ordem igual na matemática, *, /, % e só então + e -; se quisermos priorizar adição ou subtração antes das outras, utilizamos eles dentro de parênteses. Exemplo: (5 + 9) * 5.

//existe também os operadores de incremento (++) e decremento (--), utilizados para adicionar ou subtrair o valor 1 de uma variável
var contador = 5;
contador++;
console.log(contador); //contador agora vale 6

contador--;
console.log(contador); //contador agora vale 5
//contador = contador + 1 ou contador += 1 ou contador++
//igual para contador = contador - 1 ou contador -= 1 ou contador--

//operadores relacionais (comparação) retornando um booleano (true ou false)
//igualdade (==)
console.log(21 == 21); //vai imprimir true
console.log(120 == 100); //vai imprimir false

//desigualdade (!=)
console.log(11 != 21); //vai imprimir true
console.log(100 != 100); //vai imprimir false

//mesmo com os valores sendo de tipos diferentes esses operadores conseguem fazer a comparação
console.log('20' == 20); //true
console.log(true == 1); //true

//operador de igualdade estrita (===), este operador compara se os dois são iguais tanto em valor quanto tem tipo, enquanto que no (==) ele só compara se os valores são iguais, independente do tipo
'21' === 21; //o resultado será false
1 === true; //o resultado será false

//o mesmo vale para o de desigualdade estrita (!==)
'21' !== 21; //o resultado será true
1 !== true; //o resultado será true

//se um dos valores for number e outro string, ele vai converter a string em um number e só então realiza a comparação
'21' == 21;
//parseInt('21') é a função que converte uma string em number
21 == 21; //o JavaScript usa o resultado para fazer a comparação

//null e undefined são iguais
null == undefined; //o resultado será true
null != undefined; //o resultado será false

//true é convertido para 1 e false para 0
true == 1 //o resultado será true
true != 1 //o resultado será false
false == 0 //o resultado será true
false != 0 //o resultado será false

//resumo:
// = significa que uma variável recebe ou é atribuída de um valor.
// == verifica se uma condição é igual a outra, fazendo conversão de tipo para isso.
// === verifica se uma condição é exatamente igual a outra, tanto em tipo quanto em valor.

//operadores lógicos, compara dois valores booleanos e retorna um valor true ou false
true && false //false
false || false //false
!true // false

//costuma utilizar para combinar operações relacionais
1 == '1' || 'a' == 'a' //true
35 == '35' && 1 == 10 //false
!('a' == 1) //true

//Lembre-se que ao utilizar o operador OU, caso o valor da primeira expressão seja true, o que vier a seguir não será avaliado.

var contador = 0;

console.log(contador++);
console.log(--contador);
console.log(++contador);
console.log(contador--);