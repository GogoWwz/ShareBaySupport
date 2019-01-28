const FriendModel = require('../../models/Friend')
const UserModel = require('../../models/User')
const ResFuns= require('../../utils/resFuns')

const AddRouter = async (req, res) => {
    const addParams = req.body
    const { userOneId, userTwoId } = addParams
    try {
        const ids = [ userOneId, userTwoId ]  
        const resultFriend = await FriendModel.find({ 'inviter._id': { $in: ids }, 'accepter._id': { $in: ids } })
        if(!resultFriend.length) {
            const result1 = await UserModel.find({ _id: userOneId })
            const result2 = await UserModel.find({ _id: userTwoId })
            if(result1.length && result2.length) {
                let newFriend = FriendModel({
                    inviter: result1[0],
                    accepter: result2[0],
                    status: 'waiting'
                })
                await newFriend.save()  
                ResFuns.responseSuc(res, '已发送好友申请')
            }
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = AddRouter