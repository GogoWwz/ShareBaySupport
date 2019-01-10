const UserModel = require('../../models/User')
const ResMessage = require('../../utils/resMessage')

const loginRouter = async (req, res) => {
    const loginParams = req.body
    try {
        const result = await UserModel.find({ user_name: loginParams.username })
        let data = ResMessage.setFailRes('用户不存在！')
        if(result.length) {
            const { _id: userId, user_name: username } = result[0]
            if(result[0].password === loginParams.password) {
                let resData = {
                    userId,
                    username
                }
                data = ResMessage.setSucRes('登录成功！', resData)
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