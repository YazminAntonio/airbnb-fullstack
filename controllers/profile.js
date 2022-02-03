// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
const Users = require('../models/users')
// Create POST controller

router.get('/', async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            let userHouses = await Houses.find({
                host: req.user._id
            }).populate('host')
            // let userHouses = await Houses.find({ host: req.user._id }).populate(
            //     'host'
            // )
            // let user = await Users.find(req.user._id)

            console.log(userHouses)
            res.render('profile', { user: req.user, userHouses })
            //console.log(user)
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
