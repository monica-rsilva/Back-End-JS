/***********************************************************
 * Objetivo: Implementar a regra de negócio entre o app e a model
 * Data: 24/04/2023
 * Autor: Mônica
 * Versão: 1.0
 ***********************************************************/

// const alunoDAO = require('../model/DAO/alunoDAO.js');

//  Função para receber os dados do APP e enviar para a model para inserir um novo item
const inserirAluno = function(dadosAlunos) {

};

//  Função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = function(dadosAlunos) {

};

//  Função para excluir um aluno filtrado pelo id, será encaminhado para a model
const deletarAluno = function(id) {

};

//  Função para retornar todos os itens da tabela, recebidos da model
const selecionarTodosAlunos = async function() {

    // import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js');

    let dadosAluno = await alunoDAO.selectAllAluno();

    // cria um objeto do tipo JSON
    let dadosJSON = {};

    // valida se o BD teve registros
    if (dadosAluno) {
        // Adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    } else
        return false

};


//  Função para buscar um item filtrando pelo id, será encaminhado para a model
const buscarIdAluno = function(id) {

};

module.exports = {
    selecionarTodosAlunos
}