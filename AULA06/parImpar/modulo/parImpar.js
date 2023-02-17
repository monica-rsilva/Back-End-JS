/*********************************************************************
 * Objetivo: Arquivo de funções para gerenciar números pares e impares 
 * Data: 17/02/2023
 * Autor: Mônica
 * Versão: 1.0
 *********************************************************************/

const par = function (valInicial, valFinal) {
    let valorInicial = Number(valInicial);
    let valorFinal = Number(valFinal);

    console.log('Os números pares são:');

    while (valorInicial <= valorFinal) {

        let resultado = Number(valorInicial) % 2

        if (resultado == 0) {
            console.log(valorInicial);
        }
        valorInicial += 1;
    }
}

const impar = function (valInicial, valFinal) {
    let valorInicial = Number(valInicial);
    let valorFinal = Number(valFinal);

    console.log('Os números impares são:');

    while (valorInicial <= valorFinal) {

        let resultado = Number(valorInicial) % 2

        if (resultado == 1) {
            console.log(valorInicial);
        }
        valorInicial += 1;
    }
}

module.exports = {
    par,
    impar
}

