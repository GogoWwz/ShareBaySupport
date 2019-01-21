const BalanceModal = require('../../models/Balance')
const DialogModel = require('../../models/Dialog')
const ResFuns = require('../../utils/resFuns')
const moment = require('moment')

const takeBalanceRouter = async (req, res) => {
    const takeParams = req.body 
    const { groupId: group_id, userId: user_id, balance: balanceCount, dialog } = takeParams
    try {
        const searchKey = { group_id, user_id }
        const result = await BalanceModal.find(searchKey)
        if(result.length) {
            const userBalance = result[0]
            let newBalanceCount = parseFloat(balanceCount)
            if(userBalance.balance < newBalanceCount) {
                ResFuns.responseFail(res, `余额不足${newBalanceCount}元`)
            } else {
                userBalance.balance -= newBalanceCount
                await BalanceModal.updateOne(searchKey, userBalance)

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