const mongoose = require('mongoose')

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
    default: Now
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
