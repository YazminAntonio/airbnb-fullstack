// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.get('/', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('profile')
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
router.patch('/', (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.send('Patch')
    } else {
      res.redirect('/auth?login')
    }
  } catch (err) {
    next(err)
  }
})
// Export module
module.exports = router
