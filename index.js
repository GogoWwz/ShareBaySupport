const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(`mongodb://admin:wwz1369577@ds139534.mlab.com:39534/sharebay`)
let db = mongoose.connection
const Router = require('./router/index.js')

app.use('/index', express.static(path.join(__dirname, 'resource')))
app.use('/api', Router)
db.on('error', err => console.log(err))
db.once('open', () => {
    console.log("连接成功")
});

app.listen(3000, () => {
    console.log('server is running at port 3000')
})