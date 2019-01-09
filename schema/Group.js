const mongoose = require('mongoose')
const UserSchema = require('./User')

const Schema = mongoose.Schema

const GroupSchema = Schema({
    group_name: {
        type: String,
        require: true,
        default: 'SB no.1'
    },
    group_balance: {
        type: Number,
        require: true,
        default: 0
    },
    group_members: {
        type: [{
            user_name: String,
            user_balance: Number
        }],
        require: true,
        default: []
    }
})

module.exports = GroupSchema

