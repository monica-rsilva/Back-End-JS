/**************************************************************************
 * Objetivo: Aplicação onde serão inseridos dois valores (inicial e final),
 *retornando separados pares e impares, assim como também a quantidade de  
 * números encontrados.
 * Data: 17/02/2023
 * Autor: Monica 
 **************************************************************************/

 var parImpar = require('./modulo/parImpar')

 var readline = require('readline');

 var entradaDados = readline.createInterface({
     input:process.stdin,
     output: process.stdout
 });

 entradaDados.question('Digite o primeiro valor:\n', function(valInicial){

    let valorInicial = valInicial;

    entradaDados.question('Digite o segundo valor:\n', function(valFinal){

        let valorFinal = valFinal;
        
        let resultado = parImpar.par(valorInicial,valorFinal);

        console.log(resultado);

    });
 });