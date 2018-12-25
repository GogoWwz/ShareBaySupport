const mongoose = require('mongoose')
const UserSchema = require('../schema/User')

const testMongo = async () => {
    const UserModel = mongoose.model('User', UserSchema, 'User');
    const user = new UserModel({
        username: 'wuweizhen'
    })
    try {
        const result = await user.save()
        const users = await UserModel.find({})
        console.log(users);
    } catch (err) {
        console.log(err)
    }

}



module.exports = testMongo