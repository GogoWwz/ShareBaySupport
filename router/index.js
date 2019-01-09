const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    res.send('Got a GET request')
})

// 登录路由
Router.post('/login', require('./login/login'))

// 获取基本信息
Router.get('/home/getGroup', require('./home/getGroup'))
// 充值
Router.post('/home/addBalance', require('./home/addBalance'))

Router.get('/register', (req, res) => {
    res.send('Got a register request')
})

module.exports = Router