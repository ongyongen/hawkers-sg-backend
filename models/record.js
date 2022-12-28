const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

recordSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        // delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Record', recordSchema)