const DialogModel = require('../../models/Dialog')
const ResFuns = require('../../utils/resFuns')

const dialogRouter = async (req, res) => {
    const { groupId: group_id, userId: user_id } = req.query
    try {
        const searchKey = { user_id }
        if(group_id !== 'allGroup') {
            searchKey['group_id'] = group_id
        }
        const result = await DialogModel.find(searchKey).sort({ 'dialog.datetime': 1 })
        if(result.length) {
            let dialogList = []
            for(let i = 0; i < result.length; i++) {
                let obj = result[i]
                dialogList.push(obj.dialog)
            }
            ResFuns.responseSuc(res, '查询成功', dialogList)
        } else {
            ResFuns.responseFail(res, '暂无数据')
        }
    } catch(err) {
        console.log(err)
    }
}

module.exports = dialogRouter