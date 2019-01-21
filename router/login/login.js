const UserModel = require('../../models/User')
const ResFuns = require('../../utils/resFuns')

const loginRouter = async (req, res) => {
    const loginParams = req.body
    try {
        const result = await UserModel.find({ user_name: loginParams.username })
        if(result.length) {
            const { _id: userId, user_name: username } = result[0]
            if(result[0].password === loginParams.password) {
                let resData = {
                    userId,
                    username
                }
                ResFuns.responseSuc(res, '登录成功', resData)
            } else {
                ResFuns.responseFail(res, '密码错误')
            }
        } else {
            ResFuns.responseFail(res, '用户不存在')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = loginRouter