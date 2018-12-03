const express = require('express')
const app = express()

const Router = require('./router/index.js')

app.use('/api', Router)

app.listen(3000, () => {
    console.log('server is running at port 3000')
})