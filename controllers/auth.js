// Import Packages
const express = require('express')
const router = express.Router()

const Users = require('../models/users')
// Create POST controller

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/login', (req, res) => {
  res.render('login')
})

router.post('/signup', async (req, res, next) => {
  try {
    let foundUser = await Users.findOne({ email: req.body.email })
    if (foundUser) {
      throw new Error('User with this email already exists')
    } else {
      let userJustCreate = await Users.create(req.body)
      req.login(userJustCreate, err => {
        if (err) {
          throw err
        } else {
          res.redirect('/houses')
        }
      })
    }
  } catch (err) {
    next(err)
  }
})
router.get('/logout', (req, res) => {
  // req.logout()
  // req.session.destroy( => {
  //
  // })
})
// Export module
module.exports = router
