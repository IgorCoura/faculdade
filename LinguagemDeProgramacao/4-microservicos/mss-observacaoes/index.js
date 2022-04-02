const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}


//POST
//exemplo.com.br/lembretes/id/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const {texto} = req.body
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
    observacoesDoLembrete.push({id: idObs, texto})
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
    res.status(201).send(observacoesDoLembrete)
})

//GET
//exemplo.com.br/lembretes/id/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || [])
})

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})