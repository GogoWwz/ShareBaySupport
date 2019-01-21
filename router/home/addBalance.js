const BalanceModel = require('../../models/Balance')
const DialogModel = require('../../models/Dialog')
const ResFuns = require('../../utils/resFuns')
const moment = require('moment')

const addBalanceRouter = async (req, res) => {
    const addParams = req.body
    const { userId: user_id, groupId: group_id, balance: balanceCount } = addParams
    try {
        const result = await BalanceModel.find({ user_id, group_id })
        if(result.length) {
            let pickBalance = result[0]
            pickBalance.balance += parseFloat(balanceCount)
            await BalanceModel.updateOne({ user_id, group_id }, pickBalance)
            const newDialog = DialogModel({
                user_id, group_id,
                dialog: {
                    datetime: moment(),
                    content: `充值金额${balanceCount}`
                }
            })
            newDialog.save()
            ResFuns.responseSuc(res, '充值成功！')
        } else {
            ResFuns.responseFail(res, '找不到该条数据')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = addBalanceRouter