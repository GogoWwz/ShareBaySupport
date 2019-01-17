const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BalanceSchema = Schema({
    balance_id: {
        type: Schema.Types.ObjectId
    },
    group_id: {
        type: Schema.Types.ObjectId
    },
    user_id: {
        type: Schema.Types.ObjectId
    },
    balance: {
        type: Number,
        require: true,
        default: 0
    },
    dialog: {
        type: [
            {
                datetime: Date,
                content: String
            }
        ]
    }
})

const BalanceModel = mongoose.model('balance', BalanceSchema, 'balance')

module.exports = BalanceModel