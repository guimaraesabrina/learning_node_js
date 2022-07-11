// as rotas são constituídas por 4 partes
// são elas a instancia do express
// o método de requisição(GET, POST, PUT, DELETE) e a função que será executada:
import express from 'express'
const app = express()
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})



