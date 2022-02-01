// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.post('/', (req, res) => {
  res.send('Hello from reviews')
})

// Export module
module.exports = router
