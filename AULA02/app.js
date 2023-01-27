/************************************************************
 * Objetico : Realizar a media escolar de 4 notas dos alunos 
 * Data : 27/01/2023
 * Autor : Mônica 
 * versão : 1.0 
 ************************************************************/

 console.log('Sistema de Calculo de Médias Escolares');

 //importe da biblioteca para a entrada de dados//
 var readline = require('readline');

 var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
 })

 /** CONCEITOS SOBRE A CRIAÇÃO DE VARIAVEIS */
/*
* var - toda variavel criada como var, tem por obejtivo ser um escopo global, ou seja, ela podera ser utilizada em diversos pontos da programação  
*
* let - toda variavel criada como let, tem por objetivo ser um escopo local, ou seja, será utilizada somente naquela função 
*
* const - tem como objetivo criar um espaço em memória para armazenar dados que não sofrem mudanças 
*
******************************************************************************************************************************************************/

 //Função de Callback para retornar o nome do aluno 
 entradaDados.question('Digite o nome do aluno : \n', function (nome){
  //Variavel local para receber o nome do aluno, que 
  //vai ser retornado pela função   
    let nomeAluno = nome;

    //função de CallBAck para entrada da Nota1
    entradaDados.question('Digite a nota1: \n' , function (nota1){
        //Nota1
        let primeiraNota = nota1;

        //função de CallBAck para entrada da Nota2
        entradaDados.question('Digite a nota2: \n' , function (nota2){
            //Nota2
            let segundaNota = nota2;

            ////função de CallBAck para entrada da Nota3
            entradaDados.question('Digite a nota3: \n' , function (nota3){
                //Nota3
                let terceiraNota = nota3;

                //função de CallBAck para entrada da Nota4
                entradaDados. question('Digite a nota4: \n' , function (nota4){
                    //Nota4
                    let quartaNota = nota4;

                    let media = 0;

                    /**
                 * Conversão de dados String para Numero
                     * Number.parseInt() ou parseInt() - para converter em inteiro
                     * Number.parseFloat() ou parseFloat() - para converter em real
                     * Number() Converte para int ou float, conforme a entrada do dado
                     * 
                 * Operadores de comparação
                     *  == (Verificar a igualdade de Contexto)
                     *  != (verificar a diferença do contexto)
                     *  < (verificar o menor valor)
                     *  > (verificar o maior valor)
                     *  <= (verificar o menor ou igual valor)
                     *  >= (verificar o maior ou igual valor)
                     *  === (verificar a igualdade de conteúdo e validar a tipagem de dados)
                     * 
                     * Ex. 0 == 0    V 
                     *     0 == '0'  V
                     *     0 === '0' F
                     *     0 ==! 0.0 F o conteúdo é igual porém a tipagem é diferente
                     * 
                 * Operadores Lógicos 
                     * OU || (pipe)  OR
                     * E  &&         AND
                     * Negação  !    NOT
                     */

                     //Validação para tratar entradas vazias com ||
                     if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '' )
                     {
                         console.log('Erro: é necessário digitar algum valor nas entradas')
                     }

                     else if(isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('Erro: é necessário que todos os dados digitados sejam números')
                     }

                    //  else if(primeiraNota + segundaNota + terceiraNota + quartaNota > 10 && primeiraNota + segundaNota + terceiraNota + quartaNota < 0) {
                    //     console.log('Erro: é necessário que as notas esteja entre 0 à 10')
                    //  }

                     else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;
                        console.log(media);
                     }

                     //Validação para tratar entradas vazias com &&
                    //  if (primeiraNota != '' && segundaNota != '' && terceiraNota != '' && quartaNota != '' )
                    //  {
                    //     media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;
                    //     console.log(media);
                    //  }else {
                    //     console.log('Erro: é necessário digitar algum valor nas entradas');
                    //  }
  
                    //media = (primeiraNota + segundaNota + terceiraNota + quartaNota) /4; -> quando a conversão já é feita na variável 
                    //Ex. let quartaNota = Number(nota4) ou Number.parseFlot(nota4) ou parseFloat(nota4);
                
                    //console.log(media);
                })
            })
        })
    });
});