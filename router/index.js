const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    res.send('Got a GET request')
})

// 登录路由
Router.post('/login', require('./login/login'))

// 获取余额
Router.get('/home/getBalance', require('./home/getBalance'))
Router.get('/register', (req, res) => {
    res.send('Got a register request')
})

module.exports = Router