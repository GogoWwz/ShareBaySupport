
const express = require('express')
const app = express()

app.post('/login', (req, res) => {
    console.log(req, res)
    res.send('Got a POST request')
})