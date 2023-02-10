/************************************************************************
 * Objetivo: Arquivo de funções para calcular a média final de um aluno
 * Data: 10/02/2023
 * Autor: Mônica 
 * Versão: 1.0 
 ************************************************************************/

const calcularMedia = function (nota1, nota2, nota3, nota4){

    let primeiraNota = Number(nota1);
    let segundaraNota = Number(nota2);
    let terceiraNota = Number(nota3);
    let quartaNota = Number(nota4);

    let resultado = (Number(primeiraNota) + Number(segundaraNota) + Number(terceiraNota) + Number(quartaNota))/4;

    console.log(resultado);
}

module.exports = {
    calcularMedia
}


