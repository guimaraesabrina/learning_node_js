//MóduloJS

// #1 transformei todos os meus arquivos em módulo, criando uma variável para cada função.
// #2 chamei a função do NodeJs "module.exports = div" (por exemplo)
// #3, no arquivo principal (calc_node.js), eu faço a junção desses módulos.

var somaFunc = require("./soma");

// a minha variável "somaFunc" está recebendo tudo que está dentro do módulo "soma.js"

console.log(somaFunc(1, 2))

// require JS é uma função especifica do Node.JS que vai pegar um módulo e retorna-lá para uma variável criada.
// Módulos é muito utilizado para refatorar e organizar códigos. 

