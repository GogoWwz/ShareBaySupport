const mongoose = require('mongoose')
const BalanceSchema = require('../schemas/Balance')

const BalanceModel = mongoose.model('balance', BalanceSchema, 'balance')

module.exports = BalanceModel