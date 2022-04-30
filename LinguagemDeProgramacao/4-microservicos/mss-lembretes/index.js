
const express = require('express')
const axios = require('axios')
const app = express()

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
app.post('/lembretes', async (req, res) => {
    
    try{
        contador++
        const {texto} = req.body
        lembretes[contador] = {contador, texto}
        await axios.post('http://localhost:10000/eventos', {
        tipo: 'lembrete',
        dados: {
            contador, texto,
        }
        })  
        res.status(201).send(lembretes[contador])
    }
    catch(error){
        console.log(error)
        res.status(500).end()
    }
    
})


app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})

