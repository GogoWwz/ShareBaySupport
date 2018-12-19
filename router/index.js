const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    res.send('Got a GET request')
})

Router.post('/login', (req, res) => {
    let data = { code: 0, message: "login success" }
    res.json(data)
})

Router.get('/register', (req, res) => {
    res.send('Got a register request')
})

module.exports = Router