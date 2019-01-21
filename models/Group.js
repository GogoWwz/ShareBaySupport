const mongoose = require('mongoose')
const GroupSchema = require('../schemas/Group')

const GroupModel = mongoose.model('group', GroupSchema, 'group')

module.exports = GroupModel

