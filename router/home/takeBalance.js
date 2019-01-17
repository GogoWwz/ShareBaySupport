const BalanceModal = require('../../models/Balance')
const ResMessage = require('../../utils/resMessage')
const moment = require('moment')

const takeBalanceRouter = async (req, res) => {
    const takeParams = req.body 
    const { groupId: group_id, userId: user_id, balance: balanceCount, dialog } = takeParams
    try {
        const searchKey = { group_id, user_id }
        const result = await BalanceModal.find(searchKey)
        let resData = ResMessage.setFailRes('查询失败')
        if(result.length) {
            const userBalance = result[0]
            let newBalanceCount = parseFloat(balanceCount)
            if(userBalance.balance < newBalanceCount) {
                resData = ResMessage.setFailRes(`余额不足${newBalanceCount}元`)
            } else {
                let newDialog = {
                    datetime: moment(),
                    content: `取出${newBalanceCount}，用于${dialog}`
                }
                userBalance.dialog.push(newDialog)
                userBalance.balance -= newBalanceCount
                await BalanceModal.updateOne(searchKey, userBalance)
                resData = ResMessage.setSucRes('取出成功')
            }
        }
        res.json(resData)
    } catch(err) {
        console.log(err)
    }
}

module.exports = takeBalanceRouter