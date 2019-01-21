const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = Schema({
    group_id: {
        type: Schema.Types.ObjectId
    },
    group_name: {
        type: String,
        require: true,
        default: 'SB no.1'
    }
})

module.exports = GroupSchema