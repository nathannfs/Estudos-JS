// importando o 'readline-sync' que nos possibilita usar o input
import entradaDados from 'readline-sync';

// Título da aplicação
console.log("Aplicação de Juros: \n");

// Criando uma variável que armazenará o dado que o usuário inserir
let valor = entradaDados.question("Informe o valor devido: R$ ");

if (valor == 0) { // Condição caso o valor da dívida seja igual a zero, informar um erro ao usuário
    console.log("O valor da dívida deve ser maior que zero!");

}
else { // Se não for, então pedirá ao usuário para que informe o número de dias após o vencimento do boleto
    let dias = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
    if (dias == 0) { // Caso os dias seja igual a zero, então o usuário recebe uma mensagem informando que está em dia com o boleto
        console.log("Você está em dia!");
    }
    else { // Caso os dias seja maior que 0, então a aplicação funcionará completamente
        if (dias > 15) {
            let juros = 10; // Valor do juros em % se os dias for maior que 15
            let valor_juros = Number(valor) + (valor * (juros / 100)); // cálculo do valor total da dívida

            console.log("\nValor Original da dívida: R$ " + valor); // Imprime na tela o valor original
            console.log("Dias atrasados: " + dias); // Imprime os dias de atraso
            console.log("Taxa de Juros: " + juros + "%"); // Imprime quanto de juros foi cobrado
            console.log("Valor total com Juros: R$ " + valor_juros); // Imprime o valor total da dívida
        }
        else {
            let juros = 5; // Valor do juros em % se os dias for menor ou igual a 15
            let valor_juros = Number(valor) + (valor * (juros / 100)); // cálculo do valor total da dívida

            console.log("\nValor Original da dívida: R$ " + valor); // Imprime na tela o valor original
            console.log("Dias atrasados: " + dias); // Imprime os dias de atraso
            console.log("Taxa de Juros: " + juros + "%"); // Imprime quanto de juros foi cobrado
            console.log("Valor total com Juros: R$ " + valor_juros); // Imprime o valor total da dívida
        }
    }
}