/************************************
 * Objetivo: Trabalhando com array
 * Data: 24/02/2023
 * Autor: Mônica 
 * Versão: 1.0
 ************************************/

 // [] - significa que estamos manipulando um array de dados
 // {} - significa que estamos manipulando um formato JSON de dados

 const listaNomes = ['Jose','Maria','Luiz','Carlos', 'Sophia','Lennon'];
 const listaProdutos = ['Teclado','Mouse','Monitor','Computador','Fone','Impressora','Scanner','WebCam']
 const listaProdutosJSON = {};
 const listProdutosJSON = {};

 /**
  * Exemplo de um JSON com estrutura de array 
  * 
  * produtos = {
  *        [
  *         {nome : "teclado", cor : "preto", quantidade : 50}
  *         {nome : "monitor", cor : "branco", quantidade : 30}
  *         {nome : "mouse", cor : "branco", quantidade : 30}
  *        ]
  * }
  */
 
 //Forma ERRADA de manipular um conjunto de dados
 // const nome1 = 'Jose';
 // const nome2 = 'Maria';
 // const nome3 = 'Luiz';

 const manipulandoElementos = function(){

//Verifica o tipo de dados do elemento listaNomes
    //  console.log(typeof(listaNomes));

//Verifica o tipo de dados de um indice (item) do array
console.log(typeof(listaNomes[1]));

//Exibe todos os elementos do array
 console.log(listaNomes);

 //Exibe apenas um elemento conforme o seu indice 
 console.log(listaNomes[0]);

 //concatenando:
 console.log('O nome do usuário é ' + listaNomes[0]);
 //utilizando a crase
 console.log(`O nome do usuário é ${listaNomes[1]}`);

 //lenght - Permite contar quantos elementos tem em um array
 console.log(`A quantidade de itens do meu array é: ${listaNomes.length}`);

 //Percorrendo um array usando o while 
let cont = 0; //start
let qtdeItems = listaNomes.length; //stop

console.log('Exibindo dados do array com while')
while (cont < qtdeItems)
{
    console.log(`Nome: ${listaNomes[cont]}`)
    cont +=1;
}

 //Percorrendo um array usando o for
console.log('Exibindo dados do array com for')
let qtdeNomes = listaNomes.length; //stop

//Sem utilizar as chaves 
for(let cont = 0; cont < qtdeNomes; cont ++)
    console.log(`Nome: ${listaNomes[cont]}`)

//Percorrendo um array usando o foreach
console.log('Exibindo dados do array com for each')

//foreach é m metodo de um objeto array, que retorna uma função de callback
listaNomes.forEach(function(nome){
    console.log(`Nome: ${nome}`)
})

//Adicionando elementos novos no array 
    //push - adiciona elementos no final do array 
listaNomes.push('Alexandre');
listaNomes.push('Marcos','Lucas');
console.log(listaNomes);

//unshift - adiciona elementos no inicio do array (ele muda a posição de todos os proximos elementos)
    listaNomes.unshift('Ana Maria', 'Pedro');
    console.log(listaNomes);

//Removendo elementos do array 
    //pop - remove o ultimo elemento do array 
    listaNomes.pop();
    console.log(listaNomes);

    //shift - remove o primeiro elemento do array (reorganiza todos os proximos elementos)
    listaNomes.shift();
    console.log(listaNomes);

 };

 const filtrandoElementos = function(){
//indexof - permite buscar elementos dentro de um array
 // se o retorno for -1 (não encontrou o item)
 // se o retorno for maior ou igual 0 (item encontrado)

console.log(listaProdutos);
// console.log(listaProdutos.indexOf('Fone de Ouvido'));

if(listaProdutos.indexOf('Monitor') >= 0)
    console.log('O item pesquisado foi encontrado.');
else
    console.log('Item não encontrado.');

//slice - permite criar uma cópia do array, podendo selecionar os items 
//const novosProdutos = listaProdutos.slice();
const novosProdutos = listaProdutos.slice(0,3);

console.log(listaProdutos);
console.log(novosProdutos);
 };

 const removerElemento = function(array, nomeItem){
     //cria uma cópia do array
    let novaLista = array.slice();

    let nome = nomeItem;
    let indice = novaLista.indexOf(nome);
    let status;

    //splice - permite remover um elemento array, pelo indice 
    //se não colocar a quantidade de elementosa serem removidos, vai apagar do item selecionado em diante  
    if(indice >= 0) {
        novaLista.splice(indice,1);
        status = true;
    } else {
        status = false;
    }

    if(status)
        return novaLista;
    else
        return status;
 };

 const listagemProdutos = function(){

    
    let listProdutos = [
                        {nome : "Teclado Dell", valor : 200, quantidade : 50},
                        {nome : "Monitor Dell", valor : 1000, quantidade : 70},
                        {nome : "Mouse Dell", valor : 100, quantidade : 350}
                       ]
    let listCores = ['Branco','Preto','Cinza']
    let listTipoTeclado = ['Mecanico','Semi-Mecanico','Membrana']
    let listTipoMonitor = ['LCD','Full-HD','4K']

    //Adiciona chaves (opções) no teclado
    listProdutos[0].cores = listCores;
    listProdutos[0].tipo = listTipoTeclado;

    //Adiciona chaves (opções) no monitor
    listProdutos[1].cores = listCores;
    listProdutos[1].tipo = listTipoMonitor;

    //Adiciona chaves (opções) no mouse
    listProdutos[2].cores = listCores;

    //Adiciona uma chave de produtos e coloca toda a estrutura dos produtos dentro dela
    listProdutosJSON.produtos = listProdutos;

    
    listaProdutosJSON.produtos = listaProdutos;
    listaProdutosJSON.clientes = listaNomes;

    // console.log(listProdutosJSON)
    //para pegar o item dentro do JSON
    // console.log('nome: ' + listProdutosJSON.produtos[1].nome);
    // console.log('valor: ' + listProdutosJSON.produtos[1].valor);
    // console.log('cor: ' + listProdutosJSON.produtos[1].cores[1]);


    //Retorna todos os dados de produto (1º nivel de dados JSON)
    listProdutosJSON.produtos.forEach(function(dadosProduto){
        console.log('Nome: ' + dadosProduto.nome);
        console.log('Valor: ' + dadosProduto.valor);

        //validação para tratar quando não existe cores de produto
        if(dadosProduto.cores != undefined){
            // retorna todas as cores existentes para cada produto
            dadosProduto.cores.forEach(function(dadosCores){
                console.log('**' + dadosCores);
            })
        }

        //validação para tratar quando não existe tipos de produto
        if(dadosProduto.tipo != undefined){
            //retorna os tipos existentes para cada produto
            dadosProduto.tipo.forEach(function(dadosTipo){
                console.log('Tipo: ' + dadosTipo);
            })
        
        }
    })
    
 }

 listagemProdutos();
//  console.log(removerElemento(listaNomes,'Maria'));
//  console.log(listaProdutos);

