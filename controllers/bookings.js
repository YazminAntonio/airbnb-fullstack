// Import Packages
const express = require('express')
const router = express.Router()

// Create POST controller

router.post('/', (req, res, next) => {
    try {
        console.log(req.user)
        if (req.isAuthenticated()) {
            res.render('Booking')
        } else {
            res.redirect('auth/login')
        }
    } catch (err) {
        next(err)
    }
})
// Export module
module.exports = router
