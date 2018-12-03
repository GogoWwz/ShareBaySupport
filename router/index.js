const express = require('express')

const Router = express.Router()

Router.get('/', (req, res) => {
    console.log(req, res)
    res.send('Got a GET request')
})

Router.get('/login', (req, res) => {
    console.log(req, res)
    res.send('Got a login request')
})

module.exports = Router