const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    res.send('Got a GET request')
})

// 登录路由
Router.post('/login', require('./login/login'))

// 注册路由
Router.post('/register', require('./register/register'))
// 获取组别
Router.get('/home/getGroupList', require('./home/getGroupList'))
// 获取余额
Router.get('/home/getBalance', require('./home/getBalance'))
// 获取日志
Router.get('/home/getDialog', require('./home/getDialog'))
// 充值
Router.post('/home/addBalance', require('./home/addBalance'))
// 取出
Router.post('/home/takeBalance', require('./home/takeBalance'))

Router.get('/register', (req, res) => {
    res.send('Got a register request')
})

module.exports = Router