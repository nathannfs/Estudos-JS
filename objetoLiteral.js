//objeto literal serve para agrupar dados, deixando-os organizados, esses dados dentro de um objeto literal, pertencem a um domínio (contexto) específico, neste caso o produto
var produto = {
    id: 9,
    nome: "Cafeteria Elétrica",
    valor: 99.00
};

console.log(produto.id); // 9
console.log(produto.nome); // Cafeteria Elétrica
console.log(produto.valor); // 99.00

var usuario = {
    id: 2,
    nome: "Nathan Ferreira Santos",
    idade: 17
};

var atendeClassificacaoEtaria = usuario.idade >= 18;

if (atendeClassificacaoEtaria === true) {
    console.log("Acesso permitido ao conteúdo");
}
else {
    console.log("O usuário ainda não pode assistir o conteúdo");
}

//se for tentado acessar uma propriedade que não está dentro do objeto, será retornado undefined

var aluno_academia = {
    id: 10,
    nome: "Nathan Ferreira Santos",
    altura: 1.73,
    peso: 80
};

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

var imc_aluno = peso_aluno / (altura_aluno * altura_aluno);

console.log("O IMC do aluno é de: " + imc_aluno.toFixed(2));

if (imc_aluno < 18.5) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso!");
}
else if (imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com o peso normal!");
}
else {
    console.log("O aluno " + nome_aluno + " está acima do peso!");
}

//quando agrupamos múltiplos dados de um mesmo domínio, temos uma coleção, ela serve para reunir itens de um mesmo contexto dentro de uma variável, exemplo o array.

//objeto
var disciplina = {
    id: 3,
    nome: "Nathan",
    carga_horaria: 160
};

//coleção de objetos
var colecao_disciplinas = [
    { id: 1, nome: "Português", carga_horaria: 240 }, //indice 0
    { id: 2, nome: "Matemática", carga_horaria: 220 }, //indice 1
    { id: 3, nome: "História", carga_horaria: 160 }, //indice 2
    { id: 4, nome: "Geografia", carga_horaria: 140 }, //indice 3
    { id: 5, nome: "Química", carga_horaria: 160 }, //indice 4
    { id: 6, nome: "Física", carga_horaria: 150 }, //indice 5
    { id: 7, nome: "Inglês", carga_horaria: 120 }, //indice 6
];

console.log(colecao_disciplinas[2]); //{id: 1, nome: "Português", carga_horaria: 240}

console.log(colecao_disciplinas[2].id); //3
console.log(colecao_disciplinas[2].nome); //História
console.log(colecao_disciplinas[2].carga_horaria); //160

//exemplo
var colecao_series_programacao = [
    { nome: "Breaking Bad", horario: "21h", sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime" },
    { nome: "Fargo", horario: "22h", sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive." },
    { nome: "Lost", horario: "20h", sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break", horario: "23h", sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA" },
    { nome: "Black Mirror", horario: "23h", sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ", horario: "20h", sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto." },
    { nome: "Dark", horario: "22h", sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos." }
];

var data_atual = new Date(); // guarda o valor da data atual em uma variável

var dia_semana = data_atual.getDay(); // retorna o dia da semana com valores de 0 a 6.

var serie_do_dia = colecao_series_programacao[dia_semana];

//guardamos os dados do objeto serie_do_dia em variáveis
var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

//exibição da séria do dia
console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie);

//praticando
var curiosidades_chuck_norris = [
    { titulo: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental." },
    { titulo: "Fórmula para maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos." },
    { titulo: "Suicida que não morre", conteudo: "Chuck Norris foi homem-bomba 34 vezes." },
    { titulo: "Olhos que tudo veem", conteudo: "Chuck Norris já viu o homem invisível." },
    { titulo: "Manipulando o tempo", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são." },
    { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda." },
    { titulo: "Não vale chorar", conteudo: "Chuck Norris faz cebolas chorarem." },
    { titulo: "Tempero de fogo", conteudo: "Chuck Norris usa pólvora como tempero." },
    { titulo: "Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma." },
    { titulo: "Contando sem parar", conteudo: "Chuck Norris contou até o infinito. Duas vezes." }
];

var tamanho_colecao = curiosidades_chuck_norris.lenght;

//Math.random() - retorna um número aleatório entre 0 e <1 (1 não incluso)
//Math.floor - arredonda um número para baixo para o número inteiro mais próximo
var numero_sorteado = Math.floor(Math.random() = tamanho_colecao); //teremos um número aleatório que pode ser entre 0 e 9

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título " + titulo_curiosidade);
console.log("Conteúdo " + conteudo_curiosidade);
