const express = require('express')
const app = express()
app.use(express.json())



//POST
//exemplo.com.br/lembretes/id/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const {observacoes} = req.body
    lembretes[id].observacoes = observacoes
    res.status(201).send(lembretes[id])
})

//GET
//exemplo.com.br/lembretes/id/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(lembretes[id].observacoes)
})

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})