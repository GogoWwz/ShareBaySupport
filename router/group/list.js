const BalanceModel = require('../../models/Balance')
const GroupModel = require('../../models/Group')
const ResFuns = require('../../utils/resFuns')

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
            ResFuns.responseSuc(res, '查询成功', groupResList)
        } else {
            ResFuns.responseFail(res, '该用户目前没有任何分组')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = groupListRouter