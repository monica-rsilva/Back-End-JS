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
app.get('/estados', cors(), async function (request, response, next) {


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
app.get('/estado/sigla/:uf', cors(), async function (request, response, next) {
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




// permite carregar os endpoint criados e guardar as requisições
// pelo protocolo HTTP na porta 8080
app.listen(8080, function () {

  console.log('Servidor aguardando requisições na porta 8080. ')
});

