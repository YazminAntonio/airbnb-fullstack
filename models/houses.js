const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    type: ObjectId,
    required: true,
    ref: 'users'
  },
  location: {
    type: String,
    required: true
  },
  photos: [{ type: String }],
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
