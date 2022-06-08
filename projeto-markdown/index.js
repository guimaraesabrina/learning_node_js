// to deal with promises
// .then() or
// async and await 

const fs = require('fs');
const { get } = require('http');
//filesystem
// native javascript library

//handling errors

function handleErrors(erro) {
    throw new Error(erro.code,'the file does not exist!'); //erro.code = passing the error code
}

function getFile(pathFile) {
    const encoding = 'utf-8'
    fs.promises
        .readFile(pathFile, encoding)
        .then((text) => console.log(text))
        .catch((erro) => trataErro(erro))

}

getFile('./index.md')

//running fylesystem 
// synchronous code vs asynchronous code
// asynchronous code: sent the request and
// and while the answer doesn't come, it will do something else

// sync: telephone
// async: whatspp/telegram

// javascript calls asynchronous code "promises" = without stopping code execution


// first method; 

/*
function getFile(pathFile) {
    const encoding = 'utf-8'
    fs.readFile(pathFile, encoding, (erro, text) => {
        if (erro) {
            handleErrors(erro)
        }
        console.log(text)
    } )
}
*/
