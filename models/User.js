const mongoose = require('mongoose')
const UserSchema = require('../schemas/User')

const UserModel = mongoose.model('user', UserSchema, 'user');
module.exports = UserModel

