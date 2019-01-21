const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DialogSchema = Schema({
    user_id: {
        type: Schema.Types.ObjectId
    },
    group_id: {
        type: Schema.Types.ObjectId
    },
    dialog: {
        datetime: Date,
        content: String 
    }
})

module.exports = DialogSchema