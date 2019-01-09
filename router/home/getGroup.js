const GroupModel = require('../../models/Group')
const ResMessage = require('../../utils/resMessage')

const groupRouter = async (req, res) => {
    try {
        const result = await GroupModel.find({ "group_members.user_name": "wuweizhen" })
        let data = ResMessage.setFailRes('查询失败')
        if(result.length) {
            const { group_balance: balance } = result[0]
            let resParam = {
                balance
            }   
            data = ResMessage.setSucRes('查询成功', resParam)
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = groupRouter