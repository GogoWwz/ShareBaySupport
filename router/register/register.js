const UserModel = require('../../models/User')
const GroupModel = require('../../models/Group')
const BalanceModel = require('../../models/Balance')
const ResMessage = require('../../utils/resMessage')

const registerRouter = async (req, res) => {
    const registerParams = req.body
    const { username, password } = registerParams
    try {   
        const users = await UserModel.find({ user_name: username })
        let data = {}
        if(users.length) {
            data = ResMessage.setFailRes('用户已存在')
        } else {
            let newUser = UserModel({ user_name: username, password, balance: 0 })
            let newGroup = GroupModel()
            let newBalance = BalanceModel({ user_id: newUser._id, group_id: newGroup._id })
            newUser.save()
            newGroup.save()
            newBalance.save()
            data = ResMessage.setSucRes('注册成功')
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = registerRouter