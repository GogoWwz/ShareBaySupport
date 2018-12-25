const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserSchema = require('../schema/User')
const Router = express.Router()

Router.get('/', (req, res) => {
    res.send('Got a GET request')
})

Router.post('/login', async (req, res) => {
    const UserModel = mongoose.model('User', UserSchema, 'User');
    const loginParams = req.body
    console.log(loginParams)
    try {
        const result = await UserModel.find({ username: loginParams.userName })
        console.log(result)
        let data = { code: 4444, message: "用户不存在！" }
        if(result.length) {
            data = { code: 8888, message: "登录成功！" }
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
})

Router.get('/register', (req, res) => {
    res.send('Got a register request')
})

module.exports = Router