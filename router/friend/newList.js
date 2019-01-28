const FriendModel = require('../../models/Friend')
const ResFuns = require('../../utils/resFuns')

const newListRouter = async (req, res) => {
    const newParams = req.query
    const { userId: user_id  } = newParams
    try {   
        const result = await FriendModel.find({ "accepter._id": user_id, status: 'waiting' })
        if(result.length) {
            let waitList = result.map(item => {
                const { user_name: username, _id: userId } = item.inviter
                return {
                    username, 
                    userId
                }
            })
            ResFuns.responseSuc(res, '查询成功', waitList)
        } else {
            ResFuns.responseFail(res, '没有待接受的好友')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = newListRouter