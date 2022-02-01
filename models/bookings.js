const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('users', {
  author: {
    type: ObjectId,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Now
  },
  description: {
    type: Text,
    required: true
  },
  house: {
    type: ObjectId,
    required: true
    //ref to houses
  }
})
