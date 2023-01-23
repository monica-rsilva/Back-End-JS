// comentário em linha 

/*
    Comentário em bloco 
*/ 

//Permite escrever uma mensagem no terminal 
console.log('Testando o node.JS');

//var -> variável 
//require -> para importar bibliotecas, imagens, etc...

//importe da biblioteca que faz entrada de dados pelo usuário
var readline = require ('readline');
const { measureMemory } = require('vm');

//Chamada de função 
//função Call back -> retorno da função de interface vai para entradaDados / chama a função e retorna para ele mesmo
//CAll back -> retornar chamada

//criamos o objeto entradaDados com as referências do readline
var entradaDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

//O que é uma função de Callback - é uma função que quando chamada ela retorna 
//o seu conteúdo em uma única instrução , ou seja, em apenas um passo na progamação.  


//Criamos uma função de Callback para receber os dados digitados pelo usuário 
//(o objeto entradaDados aguarda a digitação do usuário, após a digitação do conteudo
// é acionado um call back para encaminhar os dados para o console.log. 
//esse conteúdo foi encaminhado através do parametro nome da função) 
 
entradaDados.question("Digite seu nome: \n", function (nome){

    console.log('Bem Vindo,' + nome + ' ao servidor node.JS' )

});

