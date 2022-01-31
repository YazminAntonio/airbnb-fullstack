// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
  res.redirect('/houses')
})

// Export module
module.exports = router
