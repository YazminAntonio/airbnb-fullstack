// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
  let user = req.user
  res.render('houses/list', { user })
})
router.get('/create', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('houses/create')
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
router.get('/:id', (req, res, next) => {
  res.render('houses/one')
})
router.get('/:id/edit', (req, res) => {
  try {
    if (req.isAuthenticated()) {
      res.render('houses/edit')
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
router.post('/', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('houses/list')
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
router.patch('/:id', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('houses/one')
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})
router.delete('/:id', (req, res, next) => {
  try {
    if (req.isAuthenticated()) {
      res.render('houses/one')
    } else {
      res.redirect('/auth/login')
    }
  } catch (err) {
    next(err)
  }
})

// Export module
module.exports = router
