const mongoose = require('mongoose')
const UserSchema = require('../../schema/User')
const ResMessage = require('../../utils/resMessage')

const loginRouter = async (req, res) => {
    const UserModel = mongoose.model('user', UserSchema, 'user');
    const loginParams = req.body
    try {
        const result = await UserModel.find({ user_name: loginParams.username })
        let data = ResMessage.setFailRes('用户不存在！')
        if(result.length) {
            if(result[0].password === loginParams.password) {
                data = ResMessage.setSucRes('登录成功！')
            } else {
                data = ResMessage.setFailRes('密码错误！')
            }
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = loginRouter