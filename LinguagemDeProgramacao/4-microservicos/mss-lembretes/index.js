
const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log("oi")
    next()
})
app.use(express.json())

const lembretes = {}
contador = 0;

//GET
//exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

//POST
//exemplo.com.br/lembretes
app.post('/lembretes', (req, res) => {
    contador++
    const {texto} = req.body
    lembretes[contador] = {contador, texto}
    res.status(201).send(lembretes[contador])
})

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})
