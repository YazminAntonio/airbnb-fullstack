const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('users', {
  avatar: {
    type: Text
  },
  email: {
    type: Text,
    required: true
  },
  name: {
    type: Text,
    required: true
  },
  password: {
    type: Text,
    required: true
  }
})
