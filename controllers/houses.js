// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller
router.get('/', (req, res) => {
  res.send('Hello from houses')
})
router.get('/create', (req, res) => {
  res.render('houses/create')
})
router.get('/:id', (req, res) => {
  res.render('houses/one')
})
router.get('/:id/edit', (req, res) => {
  res.send('Id-edit')
})
router.post('/', (req, res) => {
  res.send('')
})
router.patch('/:id', (req, res) => {
  res.send('House updated')
})
router.delete('/:id', (req, res) => {
  res.send('House delete')
})
// Export module
module.exports = router
