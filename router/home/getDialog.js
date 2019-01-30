const DialogModel = require('../../models/Dialog')
const BalanceModel = require('../../models/Balance')
const ResFuns = require('../../utils/resFuns')

const dialogRouter = async (req, res) => {
    const { groupId: group_id, userId: user_id } = req.query
    try {
        if(group_id === 'allGroup') {
            const balanceResult = await BalanceModel.find({ user_id })
            let dialogResult = []
            for(let i = 0; i < balanceResult.length; i++) {
                const { group_id } = balanceResult[i]
                dialogResult = await DialogModel.find({ group_id })
            }
            let dialogList = dialogResult.map(item => item.dialog)
            ResFuns.responseSuc(res, '查询成功', dialogList)
        } else {
            const result = await DialogModel.find({ group_id }).sort({ 'dialog.datetime': 1 })
            if(result.length) {
                let dialogList = result.map(item => {
                    return item.dialog
                })
                ResFuns.responseSuc(res, '查询成功', dialogList)
            } else {
                ResFuns.responseFail(res, '暂无数据')
            }
        } 
        
    } catch(err) {
        console.log(err)
    }
}

module.exports = dialogRouter