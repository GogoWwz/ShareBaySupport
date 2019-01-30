const UserModel = require('../../models/User')
const ResFuns = require('../../utils/resFuns')

const registerRouter = async (req, res) => {
    const registerParams = req.body
    const { username, password } = registerParams
    try {   
        const users = await UserModel.find({ user_name: username })
        let data = {}
        if(users.length) {
            ResFuns.responseFail(res, '用户已存在')
        } else {
            let newUser = UserModel({ user_name: username, password })
            newUser.save()
            ResFuns.responseSuc(res, '注册成功')
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = registerRouter