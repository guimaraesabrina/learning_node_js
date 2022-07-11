// initial config.
// inicializando express
const express = require('express')
const app = express()

// read JSON, utilizando middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rota inicial, endpoint;
// rota '/' é a rota principal;

app.get('/', (req, res) => {
    
    //mostrando requisição

    res.json({message: 'Hi, Express!'})
})

// entregar uma porta 
app.listen(3000)

