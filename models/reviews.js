const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('reviews', {
  author: {
    type: ObjectId,
    required: true
    //ref: //review this part
  },
  date: {
    type: Date,
    required: true,
    default: now
  },
  description: {
    type: Text,
    required: true
  },
  house: {
    type: ObjectId,
    required: true
    //ref check this
  },
  rating: {
    type: Number
  }
})
