/***************************************************************************
 * Objetivo: API para interagir com Banco de Dados (GET, POST, DELETE, PUT)
 * Data: 14/04/2023
 * Autor: Mônica
 * Versão: 1.0
 ***************************************************************************/

/************************************************************************
 * Para realizar a conexão com o Banco de Dados iremos utilizar o prisma 
 *  npm install prisma --save
 *  npx prisma 
 *  npx prisma init 
 *  npm install @prisma/client
 ************************************************************************/

//  import das bibliotecas do projeto
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request } = require('express');

// Cria o objeto app utilizando a classe do express
const app = express();

// Configura as permissões do cors
app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');

    //  Permissões de metodos que serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST , PUT , DELETE , OPTIONS');

    // Define as permissões para o cors
    app.use(cors());


    // Continua para a leitura dos EndPoints 
    next();
});

// CRUD (create, read, update, delete)

/*******************************************************************
 * EndPoint: Tabela de aluno
 * Versão: 1.0
 * Data: 14/04/2023
 *******************************************************************/

//  Criando uma const para realizar o processo de padronização de dados que vão chegar no body da requisição
const bodyJSON = bodyParser.json();

// import da controller do ALuno
var controllerAluno = require('./controller/controller_aluno.js');
var message = require('./controller/modulo/config.js')

// EndPOint: Retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

    // solicita a controller que retorne todos os alunos do BD
    let dados = await controllerAluno.selecionarTodosAlunos();

    // valida se existem registros para retornar na requisição
    if (dados) {
        response.json(dados);
        response.status(200);
    } else {
        response.json();
        response.status(404);
    }

});

// EndPOint: Retorna dados do aluno pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {


});

// EndPOint: Inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response) {

    let contentType = request.headers['content-type'];

    if (String(contentType).toLowerCase() == 'application/json') {
        // Recebe os dados encaminhados no body da requisição
    let dadosBody = request.body;

    // console.log(dadosBody)

    // Envia os dados para a controller
    let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);

    // Retorna o status code e a message
    response.status(resultInsertDados.status);
    response.json(resultInsertDados)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status);
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }
});

// EndPOint: Atualiza um aluno pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function(request, response) {

    // Recebe os dados do body
    let dadosBody = request.body;

    // Recebe o id do aluno
    let idAluno = request.params.id;

    let resultUpdateDados = await controllerAluno.atualizarAluno(dadosBody,idAluno);

    response.status(resultUpdateDados.status);
    response.json(resultUpdateDados);

});

// EndPOint: Exclui um aluno pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function(request, response) {

    let idAluno = request.params.id;

    let resultDeleteDados = await controllerAluno.deletarAluno(idAluno)

    response.status(resultDeleteDados.status);
    response.json(resultDeleteDados);

});

app.listen(8080, function() {
    console.log('servidor aguardando requisições na porta 8080!')
})