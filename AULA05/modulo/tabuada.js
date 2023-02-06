/****************************************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada de um número até um contador qualquer
 * Data: 06/02/2023
 * Autor: Marcel 
 * Versão 1.0 
 ****************************************************************************/

//Calcula uma tabuada
const tabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(multiplicando);
    let contador = Number(maxMultiplicador);
    let contTabuada = 0; //start da repetição 
    let status = true;
    let resultado;

    if (tabuada == 0 || contador == 0)
        status = false;

    else if (isNaN(tabuada) || isNaN(contador))
        status = false;

    else {

        while (contTabuada <= contador) {
            resultado = tabuada * contTabuada;

            //2x0=0
            // console.log(tabuada + 'x' + contTabuada + '=' + resultado);
            
            //Entre a crase considera tudo como uma string, e para definir o que é variavel usamos ${variavel}
            console.log(`${tabuada} x  ${contTabuada}  =  ${resultado}`);

            //contTabuada igual a ele mesmo somando mais 1, forma indicada para quem está iniciando em laços de repetição 
            //contTabuada = contTabuada + 1;

            //contTabuada++; 

            //contTabuada igual a ele mesmo somando mais 1, esta forma facilita caso quisessemos somar com outros numeros, como por exemplo: de dois em dois 
            contTabuada += 1;
        }
    }

    return status;

}

tabuada(2,10);

module.exports = {
    tabuada
}