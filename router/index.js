const express = require('express')

const Router = express.Router()

Router.use('/login', (req, res) => {
    console.log(req, res)
    res.send('Got a POST request')
})

module.exports = Router