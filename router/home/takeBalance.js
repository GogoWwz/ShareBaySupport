const BalanceModel = require('../../models/Balance')
const GroupModel = require('../../models/Group')
const DialogModel = require('../../models/Dialog')
const ResFuns = require('../../utils/resFuns')
const moment = require('moment')

const takeBalanceRouter = async (req, res) => {
    const takeParams = req.body 
    const { groupId: group_id, userId: user_id, balance: balanceCount, dialog } = takeParams
    try {
        const result = await BalanceModel.find({ group_id, user_id })
        const groupResult = await GroupModel.find({ _id: group_id })
        if(result.length) {
            const userBalance = result[0]
            const groupBalance = groupResult[0]
            let newBalanceCount = parseFloat(balanceCount)
            if(groupBalance.group_balance < newBalanceCount) {
                ResFuns.responseFail(res, `余额不足${newBalanceCount}元`)
            } else {
                userBalance.balance -= newBalanceCount
                groupBalance.group_balance -= newBalanceCount
                await BalanceModel.updateOne({ group_id, user_id }, userBalance)
                await GroupModel.updateOne({ _id: group_id }, groupBalance)

                const newDialog = DialogModel({
                    user_id, group_id,
                    dialog: {
                        datetime: moment(),
                        content: `取出金额${newBalanceCount}`
                    }
                })
                newDialog.save()
                ResFuns.responseSuc(res, '取出成功')
            }
        } else {
            ResFuns.responseFail(res, '找不到该条数据')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = takeBalanceRouter