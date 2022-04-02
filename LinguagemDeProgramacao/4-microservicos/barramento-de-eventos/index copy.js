const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())

app.post('/eventos', (req, res) => {
    const evento = req.body
    axios.post('localhost:4000/eventos', evento)
    axios.post('localhost:5000/eventos', evento)
    res.status(200).end()
})
