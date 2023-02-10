/************************************************************************
 * Objetivo: Aplicação onde serão inseridas informações sobre o aluno,
 * professor, curso e disciplina. Assim como as notas para o calculo da 
 * média final do aluno.
 * Data: 10/02/2023
 * Autor: Mônica 
 * Versão: 1.0 
 ************************************************************************/

 //import da biblioteca do calculo de media
 var calcular = require('./modulo/calculaMedia');

 //import da biblioteca para entrada de dados
 var readline = require('readline');

 //cria um objeto para receber os dados via teclado 
 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });


entradaDados.question('')

 entradaDados.question('Digite a primeira nota : \n', function(nota1) {

    let primeiraNota = nota1.replace(',' , '.');

    entradaDados.question('Digite a segunda nota : \n', function(nota2) {

        let SegundaNota = nota2.replace(',' , '.');

        entradaDados.question('Digite a terceira nota : \n', function(nota3) {

            let terceiraNota = nota3.replace(',' , '.');

            entradaDados.question('Digite a quarta nota : \n', function(nota4) {

                let quartaNota = nota4.replace(',' , '.');
                let resultado;

                // if(primeiraNota == "" || SegundaNota == "" || terceiraNota == "" || quartaNota == "") {
                //     console.log('Erro: Por favor, preencha todos os campos')
                //     entradaDados.close();
                // } else if() {

                // }
                // resultado = calcular.calcularMedia(primeiraNota,SegundaNota,terceiraNota,quartaNota);
             })
         })
     })
 })
