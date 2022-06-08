// In addition to .then() and async/await,
// JavaScript also has a constructor method for resolving promises, Promise().

// We use the Promise() constructor to write our own promises from scratch. (from 0)

function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
      if (!x) {
        reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
    });
   }
   
   function exibeResposta(textoResult) {
    console.log(textoResult);
   }
   
   promessa(true)
    .then((texto) => exibeResposta(texto))
   // sucesso na promessa

// Two parameters: resolve and reject, when I use new Promise() method. 
