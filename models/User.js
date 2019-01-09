const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        default: '123456',
    },
    balance: {
        type: Number,
        default: 0
    },
    group_own: {
        type: [
            { 
                group_id: Schema.Types.ObjectId,
                group_balance: Number
            }
        ],
        default: []
    }
})

const UserModel = mongoose.model('user', UserSchema, 'user');
module.exports = UserModel

