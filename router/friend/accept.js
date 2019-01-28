const FriendModel = require('../../models/Friend')
const ResFuns = require('../../utils/resFuns')

const acceptRouter = async (req, res) => {
    const acceptParams = req.body
    const { userId, acceptId } = acceptParams
    try {
        const searchKey = { "inviter._id": acceptId, "accepter._id": userId }
        const result = await FriendModel.find(searchKey)
        if(result.length) {
            await FriendModel.updateOne(searchKey, { status: 'done' })
            ResFuns.responseSuc(res, '已同意')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = acceptRouter