const BalanceModel = require('../../models/Balance')
const ResMessage = require('../../utils/resMessage')
const moment = require('moment')

const addBalanceRouter = async (req, res) => {
    const addParams = req.body
    const { userId: user_id, groupId: group_id, balance: balanceCount } = addParams
    try {
        const result = await BalanceModel.find({ user_id, group_id })
        let resData = ResMessage.setFailRes('查询失败')
        if(result.length) {
            let pickBalance = result[0]
            let newDialog = {
                datetime: moment(),
                content: `充值金额${balanceCount}`
            }
            pickBalance.dialog.push(newDialog)
            pickBalance.balance += parseFloat(balanceCount)
            await BalanceModel.updateOne({ user_id, group_id }, pickBalance)
            resData = ResMessage.setSucRes('充值成功！')
        }
        res.json(resData)
    } catch(err) {
        console.log(err)
    }
}

module.exports = addBalanceRouter