const BalanceModel =require('../../models/Balance')
const ResMessage = require('../../utils/resMessage')

const balanceRouter = async (req, res) => {
    const { userId: user_id, groupId: group_id } = req.query
    try {
        let searchQuery = {
            user_id
        }
        if(group_id !== 'allGroup') {
            searchQuery['group_id'] = group_id
        }
        const result = await BalanceModel.find(searchQuery)
        let data = ResMessage.setFailRes('查询失败')
        if(result.length) {
            let balance = 0
            for(let i = 0; i < result.length; i++) {
                balance += parseFloat(result[i].balance)
            }
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