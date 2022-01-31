// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.get('/', (req, res) => {
  res.send('Hello from reviews')
})
router.post('/', (req, res) => {
  res.send('post')
})

// Export module
module.exports = router
