/***********************************************************
 * Objetivo: Implementar a regra de negócio entre o app e a model
 * Data: 24/04/2023
 * Autor: Mônica
 * Versão: 1.0
 ***********************************************************/

// import do arquivo de acesso ao BD
var alunoDAO = require('../model/DAO/alunoDAO.js');

// Import do arquivo de global de configurações do projeto
var message = require('./modulo/config.js');

//  Função para receber os dados do APP e enviar para a model para inserir um novo item
const inserirAluno = async function (dadosAluno) {

    // validação de dados
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

        if (status) {

            let dadosJSON = {};

            let alunoNovoId = await alunoDAO.selectLastId();
            dadosAluno.id = alunoNovoId

            dadosJSON.status = message.CREATED_ITEM.status;
            dadosJSON.aluno = dadosAluno;

            return dadosJSON;

        }
        else
            return message.ERROR_INTERNAL_SERVER;
    }
};

//  Função para receber os dados do APP e enviar para a model para atualizar um item existente
const atualizarAluno = async function (dadosAluno, idAluno) {

    // validação de dados
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255

    ) {
        return message.ERRO_REQUIRED_DATA;
        // Validação para o ID
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {

        return message.ERROR_REQUIRED_ID;
    } else {
        // Adiciona o id no json com todos os dados 
        dadosAluno.id = idAluno;
        // Encaminha para o DAO os dados para serem alterados 
        let status = await alunoDAO.updateAluno(dadosAluno);

        if (status) {

            let dadosJSON = {};

            dadosJSON.status = message.CREATED_ITEM.status;
            dadosJSON.aluno = dadosAluno;

            return dadosJSON;

        }
        else
            return message.ERROR_INTERNAL_SERVER;
    }

};

//  Função para excluir um aluno filtrado pelo id, será encaminhado para a model
const deletarAluno = async function (idAluno) {

    if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_REQUIRED_ID;
    } else {

        let status = await alunoDAO.deleteAluno(idAluno);

        if (status)
            return message.DELETED_ITEM;
        else
            return message.ERROR_INTERNAL_SERVER;
    }


};

//  Função para retornar todos os itens da tabela, recebidos da model
const selecionarTodosAlunos = async function () {


    let dadosAluno = await alunoDAO.selectAllAluno();

    // cria um objeto do tipo JSON
    let dadosJSON = {};

    // valida se o BD teve registros
    if (dadosAluno) {
        // Adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.status = 200;
        dadosJSON.count = dadosAluno.length
        dadosJSON.alunos = dadosAluno
        return dadosJSON
    } else {
        return message.ERROR_NOT_FOUND;
    }


};

//  Função para buscar um item filtrando pelo id, será encaminhado para a model
const buscarIdAluno = async function (id) {

    if (id == '' || id == undefined || isNaN(id))
        return message.ERROR_REQUIRED_ID
    else {
        // Solicita ao DAO todos os alunos do BD
        let dadosAluno = await alunoDAO.selectByIdAluno(id);

        // cria um objeto do tipo JSON
        let dadosJSON = {};

        // valida se o BD teve registros
        if (dadosAluno) {
            // Adiciona o array de alunos e um JSON para retornar ao app
            dadosJSON.status = 200;
            dadosJSON.alunos = dadosAluno
            return dadosJSON
        } else {
            return message.ERROR_NOT_FOUND;
        }
    }
};

// //  Função para buscar um item filtrando pelo nome, será encaminhado para a model
// const buscarAlunoPeloNome = async function (nome) {

//     if (nome == '' || nome == undefined)
//         return message.ERROR_REQUIRED_DATA
//     else {
//         // Solicita ao DAO todos os alunos do BD
//         let dadosAluno = await alunoDAO.selectAlunoByName(nome);

//         // cria um objeto do tipo JSON
//         let dadosJSON = {};

//         // valida se o BD teve registros
//         if (dadosAluno) {
//             // Adiciona o array de alunos e um JSON para retornar ao app
//             dadosJSON.status = 200;
//             dadosJSON.alunos = dadosAluno
//             return dadosJSON
//         } else {
//             return message.ERROR_NOT_FOUND;
//         }
//     }
// };



module.exports = {
    selecionarTodosAlunos,
    inserirAluno,
    atualizarAluno,
    deletarAluno,
    buscarIdAluno,
    buscarAlunoPeloNome
}


