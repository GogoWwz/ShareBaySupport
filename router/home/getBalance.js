const BalanceModel =require('../../models/Balance')
const ResFuns = require('../../utils/resFuns')

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
        if(result.length) {
            let balance = 0
            for(let i = 0; i < result.length; i++) {
                balance += parseFloat(result[i].balance)
            }
            let resData = {
                balance
            }   
            ResFuns.responseSuc(res, '查询成功', resData)
        } else {
            ResFuns.responseFail(res, '找不到该条数据')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = balanceRouter