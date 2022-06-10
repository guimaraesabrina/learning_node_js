// arquivos para notas e testes de refatoração

//  try, catch e finally
//  o finally, que é executado sempre, independentemente da execução do código ter sido resolvida no try ou gerado um erro passado para o catch.
//  tanto catch quanto finally são opcionais, mas o try deve sempre estar acompanhado de um ou outro.
//  ao contrário do catch, o finally não recebe nenhum dado através dos parênteses ( ).

const fs = require('fs');

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
      console.log(chalk.yellow('operação concluída'));
    }
}
   

// libs para validação de formulário:
// yup e joi.dev

// https://www.npmjs.com/package/yup
// https://joi.dev/


