const GroupModel = require('../../models/Group')
const ResMessage = require('../../utils/resMessage')

const addBalanceRouter = async (req, res) => {
    const addParams = req.body
    try {
        const { groupId: _id, balance: balanceCount } = addParams
        const result = await GroupModel.find({ _id })
        if(result.length) {
            let group = result[0]
            let group_balance = group.group_balance
            let group_members = group.group_members
            group_members[0].user_balance += parseFloat(balanceCount)
            group_balance += parseFloat(balanceCount)
            let newData = {
                group_balance,
                group_members
            }
            const rrr = await GroupModel.updateOne({ _id }, newData)
        }
        res.json(ResMessage.setSucRes('充值成功！'))
    } catch(err) {
        console.log(err)
    }
}

module.exports = addBalanceRouter