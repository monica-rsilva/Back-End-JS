/************************************************************************
 * Objetivo: Arquivo de funções para manipular informações sobre
 * o aluno e professor
 * Data: 10/02/2023
 * Autor: Mônica 
 * Versão: 1.0 
 ************************************************************************/

const generoAluno = function (alunoSexo) {
    let sexoAluno = alunoSexo.toUpperCase();
    let status = true;

    switch (sexoAluno) {
        case 'FEMININO':

            sexoAluno = "A aluna"
            break

        case 'MASCULINO':

            sexoAluno = "O aluno"
            break

        default:
            console.log('Erro: A opção informada é invalida')

    }
    if (sexoAluno == "") {
        console.log('Erro: Preencha o genero do(a) aluno(a)')
    }
    else {
        return sexoAluno;
    }

}

const generoProfessor = function (profSexo) {
    let sexoProfessor = profSexo.toUpperCase();

    switch (sexoProfessor) {
        case 'FEMININO':

            sexoProfessor = 'da Professora'
            break

        case 'MASCULINO':

            sexoProfessor = 'do Professor'
            break
    }
    if (sexoProfessor == "") {
        console.log('Erro: Preencha o genero do(a) professor(a)')

    } else if (sexoProfessor != 'da Professora' && sexoProfessor != 'do Professor'){
        console.log('Erro: A opção informada é invalida')
    } else {
        
    }
    
    return sexoProfessor;
// OBS: tratar a parte do return como false ou true, e fazer uma tratativa na parte do app também, caso seja falso nao printar o relatório na tela 
}

module.exports = {
    generoAluno,
    generoProfessor
}