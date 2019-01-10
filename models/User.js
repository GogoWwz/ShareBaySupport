const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = Schema({
    user_id: {
        type: Schema.Types.ObjectId
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: '123456',
    }
})

const UserModel = mongoose.model('user', UserSchema, 'user');
module.exports = UserModel

