const BalanceModel = require('../../models/Balance')
const GroupModel = require('../../models/Group')
const ResMessage = require('../../utils/resMessage')

const groupListRouter = async (req, res) => {
    const groupParams = req.query
    try {
        const { userId: user_id } = groupParams
        const result = await BalanceModel.find({ user_id })
        if(result.length) {
            let ids = result.map(item => item.group_id)
            let groupList = await GroupModel.find({ _id: { $in: ids } })
            let groupResList = groupList.map(item => {
                const { _id: groupId, group_name: groupName } = item
                return {
                    groupId,
                    groupName
                }
            })
            res.json(ResMessage.setSucRes('', groupResList))
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = groupListRouter