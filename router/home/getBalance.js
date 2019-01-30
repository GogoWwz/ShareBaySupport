const BalanceModel = require('../../models/Balance')
const GroupModel = require('../../models/Group')
const ResFuns = require('../../utils/resFuns')

const balanceRouter = async (req, res) => {
    const { userId: user_id, groupId: group_id } = req.query
    try {
        if(group_id === 'allGroup') {
            const result = await BalanceModel.find({ user_id })
            if (result.length) {
                let balance = 0
                for (let i = 0; i < result.length; i++) {
                    const groupResult = await GroupModel.find({ _id: result[i].group_id })
                    balance += parseFloat(groupResult[0].group_balance)
                }
                let resData = {
                    balance
                }
                ResFuns.responseSuc(res, '查询成功', resData)
            } else {
                ResFuns.responseFail(res, '没有任何余额')
            }
        } else {
            const result = await GroupModel.find({ _id: group_id })
            result.length ? 
            ResFuns.responseSuc(res, '查询成功', { balance: parseFloat(result[0].group_balance) }) : 
            ResFuns.responseFail(res, '没有任何余额')
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = balanceRouter