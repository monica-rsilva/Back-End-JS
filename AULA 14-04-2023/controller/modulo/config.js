/********************************************************************************************************************
 * Objetivo: Arquivo responsável pelas variaveis, constantes e funções globais do projeto
 * Data: 28/04/2023
 * Autor: Mônica 
 * Versão:1.0
 ********************************************************************************************************************/

/******************************************* Constantes de ERROS ****************************************************/
const ERROR_REQUIRED_DATA = { status: 400, message: 'Existem dados obrigatórios que não forem preenchidos' };
const ERROR_REQUIRED_ID = { status: 400, message: 'O atributo ID é obrigatório na requisição' };
const ERROR_INTERNAL_SERVER = { status: 500, message: 'Erro interno no servidor de Banco de Dados' };
const ERROR_INVALID_CONTENT_TYPE = { status: 415, message: 'O tipo de mídia Content-Type não é conpatível com o servidor, [application/json]' };

/******************************************* Constantes de SUCESSO **************************************************/
const CREATED_ITEM = { status: 201, message: 'Registro criado com sucesso.' }
const UPDATED_ITEM = { status: 201, message: 'Registro atualizado com sucesso.' }
const DELETED_ITEM = { status: 201, message: 'Registro deletado com sucesso.' }

module.exports = {

    CREATED_ITEM,
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_ID,
    UPDATED_ITEM,
    DELETED_ITEM,
    ERROR_INVALID_CONTENT_TYPE
}