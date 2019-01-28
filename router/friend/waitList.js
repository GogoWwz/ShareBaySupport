const FriendModel = require('../../models/Friend')
const ResFuns = require('../../utils/resFuns')

const waitListRouter = async (req, res) => {
    const waitParams = req.query
    const { userId: user_id  } = waitParams
    try {   
        const result = await FriendModel.find({ "inviter._id": user_id, status: 'waiting' })
        if(result.length) {
            let waitList = result.map(item => {
                const { user_name: username, _id: userId } = item.accepter
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

module.exports = waitListRouter