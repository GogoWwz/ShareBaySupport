const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
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
    }
})

module.exports = UserSchema

