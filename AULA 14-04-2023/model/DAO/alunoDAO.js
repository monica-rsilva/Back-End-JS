/***********************************************************
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autor: Mônica
 * Versão: 1.0
 ***********************************************************/

// Inserir um novo Registro no Banco de Dados
const insert = function(dadosAluno) {

}

// Atualizar um Registro no Banco de Dados
const update = function(dadosAluno) {

}

// Excluir um Registro do Banco de Dados
const deleteAluno = function(id) {

}

// Retorna todos os Registro do Banco de Dados
const selectAllAluno = async function() {
    // importe da biblioteca do prisma client (responsável por manipular dados no BD)
    let { PrismaClient } = require('@prisma/client')

    // instancia da classe do PrismaClient
    let prisma = new PrismaClient();

    // variavel com o scriptSQL para executar o BD
    let sql = 'select * from tbl_aluno';


    // executa no BD oscriptSQL 
    // $queryRawUnsafe() é executado quando o scriptSQL esta em uma variavel
    // $queryRAw() é utilizado quando passar o script direto no metodo (Ex: $queryRaw('select * from tbl_aluno'))
    let rsAluno = await prisma.$queryRawUnsafe(sql);



    // valida se o BD retornou algum registro
    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;

}


// Retorna um Registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = function(id) {

}

module.exports = {
    selectAllAluno
}