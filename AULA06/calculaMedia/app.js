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

//import da biblioteca para definir o genero
var genero = require('./modulo/infoAlunoProfessor');


//import da biblioteca para entrada de dados
var readline = require('readline');

//cria um objeto para receber os dados via teclado 
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Digite o nome do(a) Aluno(a) : \n', function (nomeAluno) {

    let alunoNome = nomeAluno;

    entradaDados.question('Digite o genero do(a) Aluno(a) : [Feminino/Masculino] \n', function (alunoSexo) {

        let sexoAluno = alunoSexo;

        entradaDados.question('Digite o nome do(a) Professor(a) : \n', function (nomeProfessor) {

            let professorNome = nomeProfessor;

            entradaDados.question('Digite o genero do(a) Professor(a) : [Feminino/Masculino] \n', function (profSexo) {

                let sexoProfessor = profSexo;

                entradaDados.question('Digite a primeira nota : \n', function (nota1) {

                    let primeiraNota = nota1.replace(',', '.');

                    entradaDados.question('Digite a segunda nota : \n', function (nota2) {

                        let SegundaNota = nota2.replace(',', '.');

                        entradaDados.question('Digite a terceira nota : \n', function (nota3) {

                            let terceiraNota = nota3.replace(',', '.');

                            entradaDados.question('Digite a quarta nota : \n', function (nota4) {

                                let quartaNota = nota4.replace(',', '.');
                                let resultado;

                                if (primeiraNota == "" || SegundaNota == "" || terceiraNota == "" || quartaNota == "") {
                                    console.log('Erro: Por favor, preencha todos os campos')
                                    entradaDados.close();

                                } else if (isNaN(primeiraNota) || isNaN(SegundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                                    console.log('Erro: Não é possível calcular sem a entrada de valores númericos')
                                    entradaDados.close();
                                    
                                } else {
                                    resultado = calcular.calcularMedia(primeiraNota, SegundaNota, terceiraNota, quartaNota);

                                    sexoAluno = genero.generoAluno(sexoAluno);

                                    sexoProfessor = genero.generoProfessor(sexoProfessor);

                                    console.log(`${sexoAluno} ${alunoNome} foi Aprovada na Máteria ${sexoProfessor} ${professorNome}`);
                                }
                            })
                        })
                    })
                })
            })
        })
    })
})


