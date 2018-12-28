const mongoose = require('mongoose')
const UserSchema = require('../../schema/User')
const ResMessage = require('../../utils/resMessage')

const balanceRouter = async (req, res) => {
    const UserModel = mongoose.model('User', UserSchema, 'User');
    const params = req.query
    try {
        const result = await UserModel.find({ username: params.username })
        let data = {}
        if(result.length) {
            data = ResMessage.setSucRes('请求成功！', { balance: result[0].balance })
        }
        res.json(data)
    } catch(err) {
        console.log(err)
    }
}

module.exports = balanceRouter