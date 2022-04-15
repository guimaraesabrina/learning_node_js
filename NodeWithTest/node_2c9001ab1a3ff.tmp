var http = require('http');

http.createServer(function (req, res) {
    res.end("Olá")
}).listen(8081);
console.log("Servidor rodando!")

// 'http' é a minha variável
// .creatServer no Node é a função que abre um servidor HTTP.
// .listen informa em qual porta de rede eu quero abrir um servidor (porta 80, 90,99).
// porém, outros aplicativos já podem estar utilizando essa porta, e vir a gerar conflitos.
// utilizar uma porta com número alto (8081) evita de ocorrer conflito.


// digite localhost:8081 no navegador, irá ficar sempre carregando pois não direcionamos uma função para aquele servidor.
// req = requisição, res = resposta;