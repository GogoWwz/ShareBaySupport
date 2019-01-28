const mongoose = require('mongoose')
const UserSchema = require('./User')
const Schema = mongoose.Schema

const FriendSchema = Schema({
    inviter: {
        type: UserSchema
    },
    accepter: {
        type: UserSchema
    },
    status: {
        type: String
    }
})

module.exports = FriendSchema