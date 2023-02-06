/**********************************************************************************
 * Objetivo: Realizar calculos matemáticos (SOMA,SUBTRAÇÃO,MULTIPLICAÇÃO E DIVISÃO)
 * Data: 03/02/2023
 * Autor: Monica
 * versão: 1.0 
 * ********************************************************************************/

 //importe da biblioteca da calculadora (criado por nós)
 var matematica = require('./modulo/calculadora.js');


//import da biblioteca para entrada de dados 
var readline = require('readline');


//Cria um objeto para receber os dados via teclado 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados valor1
entradaDados.question('Valor1: \n', function (numero1) {

    //replace - permite trocar um conteudo da string por outro 
    let valor1 = numero1.replace(',', '.');

    //Entrada de dados valor2
    entradaDados.question('Valor2: \n', function (numero2) {

        let valor2 = numero2;
        //Entrada de dados Tipo de Calculo
        entradaDados.question('Escolha uma operação: [Somar | Subtrair | Multiplicar | Dividir]: \n', function (tipoCalculo) {

            //toUpperCase - Converte uma string para MAIUSCULO
            //toLowerCase - Converte uma string para minusculo 
            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            //Validação de entrada de dados vazios 
            if (valor1 == "" || valor2 == "" || operacao == "") {
                console.log('Erro: Não é possível calcular sem preencher todos os dados.');
                entradaDados.close();
                //Validação para verificar se os dados digitados são números
                //Podemos utilizar (isNaN ou typeof)
                //Se usar o typeof, precisa garantir que o tipo de dados não é generico (string)
                //else if (typeof(valor1) != 'number' || typeof(valor2) != 'number') {

            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('Erro: Não é possível calcular sem a entrada de valores númericos')
                entradaDados.close(); //Fecha o objeto de entrada de dados (encerra o programa)
            } else {

                //chama a função calcular, encaminhando os dados para o calculo
                resultado = matematica.calcular(valor1,valor2,operacao);

                //valida se o retorno da função é verdadeiro ou falso(se for falso, encerra o programa)

                // if (resultado == false && typeof(resultado) == 'boolean'){   ->  1 metodo - Tratativa para saber se o 0 é numerico ou booleano 
                // if (resultado === false) {                                   ->  2 metodo - Fazendo a comparação do conteudo e tipagem com os 3 iguais                                 
                if (resultado === false) {
                    entradaDados.close();
                } else {
                    console.log(resultado);
                }
            }
        })
    })
})
