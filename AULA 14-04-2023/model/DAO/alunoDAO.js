/***********************************************************
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autor: Mônica
 * Versão: 1.0
 ***********************************************************/


// importe da biblioteca do prisma client (responsável por manipular dados no BD)
var { PrismaClient } = require('@prisma/client')

// instancia da classe do PrismaClient
var prisma = new PrismaClient();

// Inserir um novo Registro no Banco de Dados
const insertAluno = async function(dadosAluno) {

    // Script SQL para inserir os dados no BD
    let sql = `insert into tbl_aluno (nome,
                                      cpf,
                                      rg,
                                      data_nascimento,
                                      email
                                      )
                                      values
                                      ('${dadosAluno.nome}', 
                                       '${dadosAluno.cpf}', 
                                       '${dadosAluno.rg}',
                                       '${dadosAluno.data_nascimento}',
                                       '${dadosAluno.email}')
                                      `;

    // Executa o script SQL no BD e recebemos o retorno se deu certo ou não
    let result = await prisma.$executeRawUnsafe(sql);
    if (result)
        return true;
    else
        return false;
}

// Atualizar um Registro no Banco de Dados
const updateAluno = function(dadosAluno) {

}

// Excluir um Registro do Banco de Dados
const deleteAluno = function(id) {

}

// Retorna todos os Registro do Banco de Dados
const selectAllAluno = async function() {

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
    selectAllAluno,
    insertAluno
}