const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Create the results moodel
module.exports = mongoose.model('bookings', {
    author: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    date: {
        type: Date,
        required: true,
        default: Date.Now
    },
    description: {
        type: String,
        required: true
    },
    house: {
        type: ObjectId,
        required: true,
        ref: 'houses'
    }
})
