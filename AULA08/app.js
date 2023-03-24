/*************************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades
 * Autor: Mônica
 * Data: 10/03/2023
 * Versão: 1.0
 * 
 *************************************************************************/

// 1- instalamos as dependencias -> 2- importamos elas -> 3- Criamos um objeto -> 4- definimos as permissões 
// 5- criamos um endpoint de callback

/**********************************************************************************************
 * Express - dependencia do Node, que permite a integração entre o protocolo http com o código
 *     npm install express --save (comando para instalar o express)
 * 
 * Cors - gerenciador de permissões para o protocolo HTTP 
 *     npm install cors --save 
 * 
 * Body-parser - É uma dependencia que permite manipular dados enviados pelo body da requisição
 *     npm install body-parser --save  
 **********************************************************************************************/


//   import das dependencias para criar a API 
// reponsavel pelas requisições 
const express = require('express');
// responsavel pelas permissões das requisições 
const cors = require('cors');
// responsavel pela manipulação do body da requisição 
const bodyParser = require('body-parser');

// import do arquivo de funçoes
const estadosCidades = require('./modulo/estados_cidades.js');

//   cria um objeto com as informações da classe express
const app = express();

//   next -> quando fizer o que está dentro da função, fará seguir para a outra
// Define as permissões no header da API
app.use((request, response, next) => {

  // Permite gerenciar a origem das requisições da API 
  // * - significa que a API será publica 
  // IP - se colocar o IP, a API somente responderá para aquela máquina 
  response.header('Access-Control-Allow-Origin', '*');
  // Permite gerenciar quais verbos (metodos) poderão fazer requisições
  response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  // Ativa no cors das requisições as permissões estabelecidas 
  app.use(cors());

  // Para seguir para a próxima função 
  next();

});

//  endPoints (Pontos de parada) -> Para cada tipo de requisição tem que ter um endPoint para ele
//  async -> requisição assincrona, senão colocar o front encerra a conexão por achar que não está sendo respondido. 

// endPOint para listar os estados 
app.get('/v1/senai/estados', cors(), async function (request, response, next) {


  // chama a função que retorna os estados
  let listaDeEstados = estadosCidades.getListaDeEstados();
  // tratamento para validar se a função realizou o processamento 
  if (listaDeEstados) {
    // retorna o Json e o Status code
    response.json(listaDeEstados);
    response.status(200);
  } else {
    response.status(500);
  }


});

//endPoint: Lista as caracteristicas do estado pela sigla
app.get('/v1/senai/estado/sigla/:uf', cors(), async function (request, response, next) {
  //criando uma variavel uf na url da requisição ( uma das alternatinas)
  //:uf - é uma variavel que será utilizada para passagens de valores, na URL da requisição 

  // recebe o valor da variavel uf, que será encaminhada na url da requisição
  let siglaEstado = request.params.uf;
  let statusCode;
  let dadosEstado = {};

  // tratamento para validar os valores encaminhados mo parametro
  if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
    statusCode = 400;
    dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
  } else {
    // chama a função que filtra o estado pela sigla 
    let estado = estadosCidades.getDadosEstados(siglaEstado);

    // valida se houve retorno valido pela função 
    if (estado) {
      statusCode = 200; //estado encontrado
      dadosEstado = estado;
    } else {
      statusCode = 404; //estado não encontrado
    }
  }
      response.status(statusCode);
      response.json(dadosEstado);

});

app.get('/v1/senai/capital/sigla/:uf',cors(), async function (request, response, next) {

  let siglaEstado = request.params.uf;
  let statusCode;
  let dadosEstado = {};

  if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
    statusCode = 400;
    dadosEstado.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
  } else {
    // chama a função que filtra o estado pela sigla 
    let estado = estadosCidades.getCapitalEstado(siglaEstado);

    // valida se houve retorno valido pela função 
    if (estado) {
      statusCode = 200; //estado encontrado
      dadosEstado = estado;
    } else {
      statusCode = 404; //estado não encontrado
    }
  }
      response.status(statusCode);
      response.json(dadosEstado);


});

app.get('/v1/senai/regiao/:regiao', cors(), async function(request,response, next){

  let regiao = request.params.regiao;
  let statusCode;
  let dadosRegiao = {};

  if (regiao == '' || regiao == undefined || !isNaN(regiao)) {
    statusCode = 400;
    dadosRegiao.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
  } else {
    // chama a função que filtra o estado pela sigla 
    let estados = estadosCidades.getEstadosRegiao(regiao);

    // valida se houve retorno valido pela função 
    if (estados) {
      statusCode = 200; //estado encontrado
      dadosRegiao = estados;
    } else {
      statusCode = 404; //estado não encontrado
    }
  }
      response.status(statusCode);
      response.json(dadosRegiao);
});

app.get('/v1/senai/capital/pais', cors(), async function(request, response, next){

  let capitalPais = estadosCidades.getCapitalPais();

  if (capitalPais) {
    // retorna o Json e o Status code
    response.json(capitalPais);
    response.status(200);
  } else {
    response.status(500);
  }

});

app.get('/v1/senai/cidades/sigla/:uf', cors(), async function (request, response, next){

  let siglaEstado = request.params.uf;
  let statusCode;
  let dadosCidades = {};

  if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
    statusCode = 400;
    dadosCidades.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
  } else {
    // chama a função que filtra o estado pela sigla 
    let cidades = estadosCidades.getCidades(siglaEstado);

    // valida se houve retorno valido pela função 
    if (cidades) {
      statusCode = 200; //estado encontrado
      dadosCidades = cidades;
    } else {
      statusCode = 404; //estado não encontrado
    }
  }
      response.status(statusCode);
      response.json(dadosCidades);

});

// EndPoint: Lista de Cidades filtrada pela sigla do estado (outro modo de fazer)
app.get('/v1/senai/cidades', cors(), async function(request,response,next){
  //Recebe o valor da variavel que sera enviada por QueryString
  //Ex.: www.uol.com.br?uf=sp&cep=08556100&nome=jose
  //a partir do ponto de interrogação são variaveis criadas na url, anterior a isso é o endereço do site
  /**
   * Usamos a query para receber diversas variaveis para realizar filtros
   * usamos o parms para receber ID (PK), geralmente para fazer PUT, DELETE, GET
   */

    let siglaEstado = request.query.uf
    // let cep = request.query.cep
    let statusCode;
    let dadosCidades = {};

  if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
    statusCode = 400;
    dadosCidades.message = "Não é possivel processar a requisição pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
  } else {
    // chama a função que filtra o estado pela sigla 
    let cidades = estadosCidades.getCidades(siglaEstado);

    // valida se houve retorno valido pela função 
    if (cidades) {
      statusCode = 200; //estado encontrado
      dadosCidades = cidades;
    } else {
      statusCode = 404; //estado não encontrado
    }
  }
      response.status(statusCode);
      response.json(dadosCidades);
  
});


// EndPoint versão 2: Lista de cidades filtrada pela sigla do estado com mais detalhes
app.get('/v2/senai/cidades', cors(), async function(request,response,next){

})
// permite carregar os endpoint criados e guardar as requisições
// pelo protocolo HTTP na porta 8080
app.listen(8080, function () {

  console.log('Servidor aguardando requisições na porta 8080. ')
});


