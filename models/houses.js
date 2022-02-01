const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('houses', {
  description: {
    type: Text,
    required: true
  },
  host: {
    type: ObjectId,
    required: true
    //ref: //review this part
  },
  location: {
    type: Text,
    required: true
  },
  photos: {
    type: String //review this part
  },
  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  title: {
    type: Text,
    required: true
  }
})
