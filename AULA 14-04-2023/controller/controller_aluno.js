/***********************************************************
 * Objetivo: Implementar a regra de negócio entre o app e a model
 * Data: 24/04/2023
 * Autor: Mônica
 * Versão: 1.0
 ***********************************************************/

// import do arquivo de acesso ao BD
var alunoDAO = require('../model/DAO/alunoDAO.js');

//  Função para receber os dados do APP e enviar para a model para inserir um novo item
const inserirAluno = async function(dadosAluno) {

    // Import do arquivo de global de configurações do projeto
    let message = require('./modulo/config.js');

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255

    ) {
        return message.ERRO_REQUIRED_DATA;
    } else {
        // Envia os dados para a model a serem inseridos no BD
        let status = await alunoDAO.insertAluno(dadosAluno);

        if (status)
            return message.CREATED_ITEM;
        else
            return message.ERROR_INTERNAL_SERVER;
    }
};

//  Função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = function(dadosAlunos) {

};

//  Função para excluir um aluno filtrado pelo id, será encaminhado para a model
const deletarAluno = function(id) {

};

//  Função para retornar todos os itens da tabela, recebidos da model
const selecionarTodosAlunos = async function() {


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
    selecionarTodosAlunos,
    inserirAluno
}