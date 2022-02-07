// Import Packages
const express = require('express')
const router = express.Router()
const Bookings = require('../models/bookings')
const Houses = require('../models/houses')
const Users = require('../models/users')

// Create POST controller

router.post('/', async (req, res, next) => {
    try {
        //console.log(req.user)
        if (!req.isAuthenticated()) {
            res.redirect('/auth/login')
        } else {
            console.log('esto es una prueba')

            let auth = await Users.findById(req.body.user).populate('users')
            let house = await Houses.findById(req.body.house).populate('house')
            console.log(auth)
            // let booking = await Bookings.create({
            //     //req.body.author = req.user._id
            //     //req.body.houses = req.house._id
            //     author: auth,
            //     description: req.body.message,
            //     house: house
            // })
            //console.log(booking)
            //res.redirect(`/houses/${house._id}`)
            res.redirect('/houses')
        }
    } catch (err) {
        next(err)
    }
})
// Export module
module.exports = router
