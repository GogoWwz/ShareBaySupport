const express = require('express')
const path = require('path')
const app = express()

const Router = require('./router/index.js')

app.use('/api', Router)

app.use('/index', express.static(path.join(__dirname, 'resource')))

app.listen(3000, () => {
    console.log('server is running at port 3000')
})