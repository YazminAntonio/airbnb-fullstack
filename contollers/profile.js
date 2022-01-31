// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.get('/', (req, res) => {
  res.send('Hello from profile')
})
router.patch('/', (req, res) => {
  res.send('')
})

// Export module
module.exports = router
