const GroupModel = require('../../models/Group')
const BalanceModel = require('../../models/Balance')
const ResMessage = require('../../utils/resMessage')

const addBalanceRouter = async (req, res) => {
    const addParams = req.body
    const { userId: user_id, groupId: group_id, balance: balanceCount } = addParams
    try {
        const result = await BalanceModel.find({ user_id, group_id })
        if(result.length) {
            let pickBalance = result[0]
            pickBalance.balance +=parseFloat(balanceCount)
            await BalanceModel.updateOne({ user_id, group_id }, pickBalance)
        }
        res.json(ResMessage.setSucRes('充值成功！'))
    } catch(err) {
        console.log(err)
    }
}

module.exports = addBalanceRouter