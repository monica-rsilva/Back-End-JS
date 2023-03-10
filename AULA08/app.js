/*************************************************************************
 * Objetivo: Criar uma API para manipulação de dados de Estados e Cidades
 * Autor: Mônica
 * Data: 10/03/2023
 * Versão: 1.0
 * 
 *************************************************************************/

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


//   cria um objeto com as informações da classe express
  const app = express();


//   next -> quando fizer o que está dentro da função, fará seguir para a outra
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
  app.get('/estados', cors(), async function(request, response, next){

    const estadosCidades = require('./modulo/estados_cidades.js');

    let listaDeEstados = estadosCidades.getListaDeEstados();

    response.json(listaDeEstados);
    response.status(200);

  });
// permite carregar os endpoint criados e guardar as requisições
// pelo protocolo HTTP na porta 8080
    app.listen(8080, function(){
        
        console.log('Servidor aguardando requisições na porta 8080. ')
    });
