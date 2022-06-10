
const fs = require('fs');

function trataErro(erro) {
  throw new Error((erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(texto)
  } catch(erro) {
    trataErro(erro);
  }
}

pegaArquivo('../assets/index.md');
