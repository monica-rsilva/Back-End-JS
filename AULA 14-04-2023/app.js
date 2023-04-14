/***************************************************************************
 * Objetivo: API para interagir com Banco de Dados (GET, POST, DELETE, PUT)
 * Data: 14/04/2023
 * Autor: Mônica
 * Versão: 1.0
 ***************************************************************************/

/**
 * Para realizar a conexão com o Banco de Dados iremos utilizar o prisma 
 *  npm install prisma --save
 *  npx prisma 
 *  npx prisma init 
 *  npm install @prisma/client
 */

//  import das bibliotecas do projeto
const express = require('express');
const cors =  require('cors');
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

// EndPOint: Retorna todos os dados de alunos 
app.get('/v1/lion-school/aluno', cors(), async function(request, response){


});

// EndPOint: Retorna dados do aluno pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    
});

// EndPOint: Inserir um novo aluno
app.post('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    
});

// EndPOint: Atualiza um aluno pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    
});

// EndPOint: Exclui um aluno pelo ID
app.delet('/v1/lion-school/aluno/:id', cors(), async function(request, response){

    
});