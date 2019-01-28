const mongoose = require('mongoose')

const FriendSchema = require('../schemas/Friend')

const FriendModel = mongoose.model('friend', FriendSchema, 'friend')

module.exports = FriendModel