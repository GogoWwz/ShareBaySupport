const BalanceModel = require('../../models/Balance')
const ResMessage = require('../../utils/resMessage')

const dialogRouter = async (req, res) => {
    const { groupId: group_id, userId: user_id } = req.query
    console.log(group_id, user_id)
    try {
        const searchKey = { group_id, user_id }
        const result = await BalanceModel.find(searchKey)
        let data = ResMessage.setFailRes('查询失败')
        if(result.length) {
            let pickBalance = result[0]
            data = ResMessage.setSucRes('查询成功', pickBalance.dialog)
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = dialogRouter