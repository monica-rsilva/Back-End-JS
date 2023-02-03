/************************************************************
 * Objetico : Criar um App que tenha como entrada dois valores e
 *  realize as quatro operações matemáticas,
 * Data : 30/01/2023
 * Autor : Mônica 
 * versão : 1.0 
 ************************************************************/

 console.log('Sistema de Cálculo de Operações matematicas');

 var readline = require('readline');

 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

entradaDados.question('Digite o primeiro valor \n', function(valor1){
    let primeiroValor = valor1.replace(",",".")

    entradaDados.question('Digite o segundo valor \n', function(valor2){
        let segundoValor = valor2.replace(",",".")

        entradaDados.question('Escolha a operação:\n a) somar \n b) subtrair \n c) multiplicar\n d) dividir\n', function (oper){
            let operacao = oper
            let resultado;

            if (primeiroValor == '' || segundoValor == '' || operacao == ''){
                console.log('Erro: Preencha todas as entradas de valores')

            } else if(isNaN(primeiroValor) || isNaN(segundoValor)){
                console.log('Erro: é necessário que todos os dados digitados sejam números')

            } else {

              if (operacao == 'somar') {
                resultado = Number(primeiroValor) + Number(segundoValor);

             } else if (operacao == 'subtrair') {
                resultado = Number(primeiroValor) - Number(segundoValor);

             } else if (operacao == 'multiplicar') {
                resultado = Number(primeiroValor) * Number(segundoValor);

             } else if (operacao == 'dividir') {
                resultado = Number(primeiroValor) / Number(segundoValor);
             } else {
                  console.log(resultado);
              }
            }
        })
    })
})
