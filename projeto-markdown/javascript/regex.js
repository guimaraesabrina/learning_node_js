// expressões regulares são ferramentas que capturam padrões em textos;
// de acordo com o que foi solicitado na função;
// utiliza-se o site: 'https://regex101.com/' para debugar expressões regulares;
// documentação 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions'

// se eu escrever no input do regex: abc = ele vai procurar a ocorrência dessas 3 letras juntas
// se eu escrever [abc] ele vai procurar a ocorrência dessas 3 letras separadas no texto todo;
// as expressões entre colchetes se chamam "[]" grupos ou classes.

// [abc] => vai selecionar todas as ocorrências dessas letras;
// [^abc] => vai selecionar tudo que NÃO for abc, o ^ representa a negação.
// [a-z] => para selecionar todas as letras entre 'a' e 'z' minúsculas;

// para pegar os links em markdown: [...](...) que possuem um meta caracter, no caso o []
// nós podemos utilizar o \
// \[\[ => devemos criar uma classe aqui dentro

// as ocorrências são chamadas de match

// \[[\w\s]*\] => primeira opção de regex, porém nessa, ainda falta colegar uma expressão que tem <>

// \[[^\]]*\] => forma mais abrangente de capturar todas as ocorrências
// essa regex vai descartar tudo que não for COLCHETES FECHANDO (])

// para selecionar os 'links' entre parenteses na estrutura de links markdowon
// () também são metacaracteres
// é necessário escapar com uma barra inversa \()

// \(https?:\/\/[^$#\s]*.[^\s]*\)

// agora é necessário juntar as duas regex: \[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)
// também separamos os matchs em grupos:
// grupo 1: [nome do link]
// grupo 2: (link)


const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; 

// para avisar o JS que vai começar uma expressão regular, nós precisamos englobar elas em barras normais
// e é necessário englobar (nesse caso) a palavra "gm" que significa global  multiline, que indica que é para selecionar todos os matchs, e não só o primeiro;
// /expressão regular aqui/


//ex2: capturar apenas o domínio e o protocolo do texto contido dentro da pasta 'assets'



