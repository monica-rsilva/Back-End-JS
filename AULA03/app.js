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

        entradaDados.question('Escolha a operação:\n a) Soma \n b) Subtração \n c) Multiplicação\n d) Divisão ', function (oper){
            let operacao = oper

            let soma = "a"
            let subtracao = "b"
            let multiplicacao = "c"
            let divisao = "d"

            let resultado = 0

            if (primeiroValor == "" || segundoValor == ""){
                console.log('Erro: Preencha todas as entradas de valores')

            } else if(isNaN(primeiroValor) || isNaN(segundoValor)){
                console.log('Erro: é necessário que todos os dados digitados sejam números')

            }
            //else{
                //resultado = Number(primeiroValor) + Number(segundoValor);

                //console.log(resultado);
            //}
        })
    })
})
