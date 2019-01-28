const FriendModel = require('../../models/Friend')
const ResFuns = require('../../utils/resFuns')

const ListRouter = async (req, res) => {
    const listParams = req.query
    const { userId: user_id  } = listParams
    try {   
        let friendList = []
        const result1 = await FriendModel.find({ "inviter._id": user_id, status: 'done' })
        for(let i = 0; i < result1.length; i++) {
            const { _id: userId, user_name: username } = result1[i].accepter
            friendList.push({
                userId,
                username
            })
        }
        const result2 = await FriendModel.find({ "accepter._id": user_id, status: 'done' })
        for(let i = 0; i < result2.length; i++) {
            const { _id: userId, user_name: username } = result2[i].inviter
            friendList.push({
                userId,
                username
            })
        }
        ResFuns.responseSuc(res, '查询成功', friendList)
    } catch(err) {
        console.log(err)
    }
}

module.exports = ListRouter