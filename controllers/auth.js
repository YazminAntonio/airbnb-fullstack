// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.get('/login', (req, res) => {
  res.send('Hello from login')
})

router.get('/signup', (req, res) => {
  res.send('Hello from signup')
})

router.post('/login', (req, res) => {
  res.send('Hello from login')
})

router.post('/signup', (req, res) => {
  res.send('Hello from signup')
})
// Export module
module.exports = router
