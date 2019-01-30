const BalanceModel = require('../../models/Balance')
const GroupModel = require('../../models/Group')
const DialogModel = require('../../models/Dialog')
const ResFuns = require('../../utils/resFuns')
const moment = require('moment')

const addBalanceRouter = async (req, res) => {
    const addParams = req.body
    const { userId: user_id, groupId: group_id, balance: balanceCount } = addParams
    try {
        const result = await BalanceModel.find({ user_id, group_id })
        const resultGroup = await GroupModel.find({ _id: group_id })
        if(result.length && resultGroup.length) {
            // 充值
            let pickBalance = result[0]
            let pickGroup = resultGroup[0]
            pickBalance.balance += parseFloat(balanceCount)
            pickGroup.group_balance += parseFloat(balanceCount)
            await BalanceModel.updateOne({ user_id, group_id }, pickBalance)
            await GroupModel.updateOne({ _id: group_id }, pickGroup)
            // 日志
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