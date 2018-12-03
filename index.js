const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hahahah')
    res.send('asdkf')
}).listen(3000, () => {
    console.log('server runnning at port 3000')
})

app.get('/login', (req, res) => {
    console.log(req, res)
    res.send('Got a POST request')
})