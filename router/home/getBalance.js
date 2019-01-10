const GroupModel = require('../../models/Group')
const BalanceModel =require('../../models/Balance')
const ResMessage = require('../../utils/resMessage')

const balanceRouter = async (req, res) => {
    const user_id = req.query.userId
    try {
        const result = await BalanceModel.find({ user_id })
        let data = ResMessage.setFailRes('查询失败')
        if(result.length) {
            const { balance } = result[0]
            let resData = {
                balance
            }   
            data = ResMessage.setSucRes('查询成功', resData)
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = balanceRouter