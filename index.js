const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const mongooseConfig = require('./config/mongoose.config')
const Router = require('./router/index')
const testMongo = require('./test/test')


mongoose.connect(`mongodb://admin:wwz1369577@ds139534.mlab.com:39534/sharebay`, mongooseConfig)
let db = mongoose.connection

// 导入路由
app.use('/api', Router)

// 连接数据库
db.on('error', err => console.log(err))
db.once('open', () => {
    console.log("连接成功")
});

// 学习mongoose
testMongo()

// 托管静态文件
app.use('/index', express.static(path.join(__dirname, 'resource')))

// 在3000端口启动服务
app.listen(3000, () => {
    console.log('server is running at port 3000')
})