// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
//const Users = require('')
// Create POST controller

router.get('/', async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            let userHouse = await Houses.findById(req.params.id).populate(
                'host'
            )
            console.log(userHouse)
            res.render('profile', { user: req.user, userHouse })
        } else {
            res.redirect('/auth/login')
        }
    } catch (err) {
        next(err)
    }
})
router.patch('/', async (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.redirect('/auth/login')
        } else {
            //  let user = await Users.findIdAndUpdate()
            //  res.send('/profile')
        }
    } catch (err) {
        next(err)
    }
})
// Export module
module.exports = router
