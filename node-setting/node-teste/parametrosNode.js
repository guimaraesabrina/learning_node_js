
// PARAMETROS W/ NODE.JS
// parametro é um valor dinâmico que o usuário consegue transmitir // passar 


const express = require("express"); //pegando o módulo do NPM
const app = express();

app.get("/", function (req, res) { //criei uma rota AQUI // rota principal.
    res.send("Seja bem vindo ao meu app!");
})

app.get("/sobre", function (req, res) { //segunda rota
    res.send("Minha pagina sobre");
})

app.get("/blog", function (req, res) { //isso é uma FUNÇÃO DE CALLBACK
    res.send("Bem vindo ao meu blog");
});

app.get('/ola/:cargo/:nome', function (req, res) { //criando um parametro
    res.send("req.params")
});

app.listen(8081, function () {
    console.log("Servidor rodando na URL http://localhost:8081")
})







// dentro de  uma ROTA, só pode enviar o SEND uma única vez

//para criar um parametro, basta:
// → depois da rota: '/:NomeDoParametro'
// depois de adicionar o 'parametro', a rota 'ola' começa a dar erro
// porque agora essa rota POSSUI um parametro.

// FUNÇÃO DE CALLBACK: responsável por receber dados → de uma requisição ('req')

// "res.send("req.params")" //consigo receber uma tabelinha com os parametros que eu mandei
// ocorre no Mozilla

// INSTALAR nodemon
// #1 habilitar a execução de scripts como administrador no WPowerShell
// #2 rodar no CPM o comando: "npm install nodemon -g"
// a flag "-g" é para identificar que o nodemon está sendo instalado globalmente na máquina 
// rodar os arquivos com "nodemon" antecedendo no CMD, apenas uma vez. 