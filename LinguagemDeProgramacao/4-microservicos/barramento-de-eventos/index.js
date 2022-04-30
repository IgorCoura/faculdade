const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

app.post('/eventos', async (req, res) => {
    const evento = req.body
    try {
        await axios.post('http://localhost:4000/eventos', evento)
        await axios.post('http://localhost:5000/eventos', evento)
        res.status(200).end()
    } catch (error) {
        console.log(error)
        res.status(500).end()
    }
})


app.listen(10000, () => {
    console.log('Barramento de eventos esta rodando na porta 10000')
})