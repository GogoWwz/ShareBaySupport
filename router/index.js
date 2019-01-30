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
Router.get('/group/list', require('./group/list'))
// 创建组
Router.post('/group/create', require('./group/create'))
// 退出某组
Router.post('/group/exit', require('./group/exit'))

// 获取余额
Router.get('/home/getBalance', require('./home/getBalance'))
// 获取日志
Router.get('/home/getDialog', require('./home/getDialog'))
// 充值
Router.post('/home/addBalance', require('./home/addBalance'))
// 取出
Router.post('/home/takeBalance', require('./home/takeBalance'))

// 获取好友列表
Router.get('/friend/list', require('./friend/list'))
// 获取待确认好友列表
Router.get('/friend/waitList', require('./friend/waitList'))
// 获取新好友列表
Router.get('/friend/newList', require('./friend/newList'))
// 添加好友
Router.post('/friend/add', require('./friend/add'))
// 接受好友
Router.post('/friend/accept', require('./friend/accept'))

// 搜索用户
Router.post('/user/findUser', require('./user/findUser'))

Router.get('/register', (req, res) => {
    res.send('Got a register request')
})

module.exports = Router