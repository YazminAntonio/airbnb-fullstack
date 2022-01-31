// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.POST('/', (req, res) => {
  res.send('Hello from bookings')
})

// Export module
module.exports = router
