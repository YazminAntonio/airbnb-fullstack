// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
  res.render('houses/list')
})
router.get('/create', (req, res) => {
  // if (req.isAuhenticaded()) {
  res.render('houses/create')
  // } else {
  //   res.redirect('/sigup')
  // }
})
router.get('/:id', (req, res) => {
  res.render('houses/one')
})
router.get('/:id/edit', (req, res) => {
  res.render('houses/edit')
})
router.post('/', (req, res) => {
  res.render('houses/list')
})
router.patch('/:id', (req, res) => {
  res.render('houses/one')
})
router.delete('/:id', (req, res) => {
  res.render('houses/one')
})

// Export module
module.exports = router
