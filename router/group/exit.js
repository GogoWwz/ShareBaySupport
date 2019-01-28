const BalanceModel = require('../../models/Balance')

const exitRouter = async (req, res) => {
    const exitParam = req.body
    const { groupId } = exitParam
    try {
        const result = await BalanceModel.find({})
    } catch(err) {
        console.log(err)
    }
}

module.exports = exitRouter