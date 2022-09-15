//estrutura condional if   
if (idade >= 16) {
    console.log('Pode votar!');
}
else {
    console.log('Não pode votar!');
}

//estrutura condicional switch
switch (ddd) {
    case 11: //irá executar esse se o ddd for igual a 11
        console.log("São Paulo");
        break;

    case 21: //irá executar esse se o ddd for igual a 21
        console.log("Rio de Janeiro");
        break;
}

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica se o dia da semana é sábado ou domingo
if (dia_semana == 0 || dia_semana == 6) {
    //Imprime uma mensagem informando o horário de funcionamento
    console.log("Funcionamos apenas de Segunda à Sexta");
}
else {
    //Do contrário, informa que a loja está aberta
    console.log("Loja aberta");
}

//pode ocorrer uma anomalia ao usar "==" porque com esse operador relacional os valores podem mudar e acabar sendo iguais mesmo com tipos diferentes, para corrigir isso devemos usar "===" pois além de ele comparar o valor ele também compara o tipo, resolvendo o problema dessa anomalia
let resposta_usuario = "";

if (resposta_usuario == 0) {
    console.log("Resposta correta"); //irá retornar resposta correta porque com o operador "==", a string vazia na variável irá ser convertida em 0, esse é um exemplo de anomalia
}
else {
    console.log("Resposta incorreta");
}

//como corrigir
if (resposta_usuario === 0) {
    console.log("Resposta correta");
}
else {
    console.log("Resposta incorreta"); //o operador "===" fará com que o valor não seja convertido pois além de comparar o valor ele também compara o tipo, retornando resposta incorreta e resolvendo a anomalia
}

//IF ternário permite criar uma estrutura condicional if/else de forma simplificada
var status = nota > 7 ? 'Aprovado' : 'Reprovado'; //'?' será identificado como 'if' e ':' como 'else'

//exemplo de if ternário com múltiplas condições
var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica a condição e define o resultado na variável 'status_loja'
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//Imprime o resultado no console
console.log(status_loja);

//também é possível usar outro jeito de simplificar a estrutura condicional if/else usando curto-circuito
var aprovado = true;

aprovado && console.log("Parabéns");
//curto-circuito não possui um equivalente ao else, por isso, o valor false é retornado sempre que a condição não for atendida

//Declaração da constante nome
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0;

//Imprime o nome no console se for diferente de vazio
nomeValido && console.log(nome);

//Estrutura conficonal Switch
var produto = "Smartphone";

switch (produto) { //expressão a ser validada
    case "Smartphone": //o case compara o valor "smartphone" com o valor da expressão
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default: //define o código padrão a ser executado caso nenhuma das cases seja atendida
        console.log("Produto inválido");
        break;
}

//também é possível vários cases ao mesmo tempo para um mesmo resultado
var produto = "Smartphone";

switch (produto) {
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

//exemplo
var mes = "Janeiro";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}