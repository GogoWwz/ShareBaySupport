const UserModel = require('../../models/User')
const FriendModel = require('../../models/Friend')
const ResFun = require('../../utils/resFuns') 

const findUserRouter = async (req, res) => {
    const findParams = req.body
    const { username: user_name } = findParams
    try {
        const friendResult1 = await FriendModel.find({ 'inviter.user_name': user_name })
        const friendResult2 = await FriendModel.find({ 'accepter.user_name': user_name })
        let user = null
        if(!friendResult1.length && !friendResult2.length) {
            const result = await UserModel.find({ user_name })
            if(result.length) {
                const { _id: userId, user_name: username } = result[0]
                user = {
                    userId,
                    username
                }
                ResFun.responseSuc(res, '查询成功', user)
            } else {
                ResFun.responseFail(res, '查不到该用户')
            }
        } else {
            ResFun.responseFail(res, '该用户已存在好友表中')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = findUserRouter