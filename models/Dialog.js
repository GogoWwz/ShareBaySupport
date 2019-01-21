const mongoose = require('mongoose')
const DialogSchema = require('../schemas/Dialog')

const DialogModel = mongoose.model('dialog', DialogSchema, 'dialog')

module.exports = DialogModel