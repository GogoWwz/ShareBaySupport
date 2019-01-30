const GroupModel = require('../../models/Group')
const BalanceModel = require('../../models/Balance')
const ResFuns = require('../../utils/resFuns')

const createRouter = async (req, res) => {
    const createParams = req.body
    const { groupName: group_name, userId: user_id, groupMembers } = createParams
    try {
        let newGroup = GroupModel({ group_name })
        const { _id: group_id } = newGroup
        groupMembers.push(user_id)
        for(let i = 0; i < groupMembers.length; i++) {
            let newBalance = BalanceModel({ group_id, user_id: groupMembers[i] })
            newBalance.save()
        }
        newGroup.save()
        ResFuns.responseSuc(res, '新建分组成功')
    } catch(err) {
        console.log(err) 
    }
}

module.exports = createRouter