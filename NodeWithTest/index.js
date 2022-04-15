// ROTAS: caminho para a aplicação.

const express = require("express"); //pegando o módulo do NPM
const app = express();

app.get("/", function (req, res) { //criei uma rota AQUI // rota principal.
    res.send("Seja bem vindo ao meu app!");
})

app.get("/sobre", function (req, res) { //segunda rota
    res.send("Minha pagina sobre");
})

app.get("/blog", function (req, res) {
    res.send("Bem vindo ao meu blog");
})

app.listen(8081, function () {
    console.log("Servidor rodando na URL http://localhost:8081")
})

// Com Express isso já é o suficiente para deixar o server rodando.
// Porém, ela deve ser a última do seu código, não deve ter nada de Express abaixo.

/*
var app está recebendo a função "express()"
e essa função cria uma cópia inteira do framework,
logo, tudo que eu for utilizar de express agora
eu vou utilizar a partir dessa variável express().
*/

// transformar de "var" em "const" evita bugs.
// transformar em "const" evita subscrição de dados.
// função de callback: função invocada dentro de OUTRA função.

//req = requisição que você recebe
//res = resposta de texto que você irá utilizar para comunicação com client side.
// function "send" -> envia a mensagem.


//ERRO "Cannot GET/" está acontecendo na tela porque ainda não definimos uma rota.