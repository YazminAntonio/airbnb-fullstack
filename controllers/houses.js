// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')
//const User = require('../models/users')

// Create POST controller
router.get('/', async (req, res, next) => {
    try {
        let house = await Houses.find({
            rooms: req.query.rooms,
            location: req.query.location
        }) // we have to do the logic for display after you get the values on the query
        res.render('houses/list', { user: req.user, house })
        // if (req.qery >= rooms) {
        //     res.render('houses/list', { rooms: req.rooms, house })
        // } else {
        //     console.log('The house is not enoughrooms')
        // }
        // for (rooms in req.query) {
        // console.log(`${rooms} ${req.query[rooms]}`)
        //let room = await Houses.find({ rooms: req.body.rooms })
        //console.log(room)
        // console.log(`${req.query[rooms]}`)
        // let rooms = await Houses.find({ rooms: `${rooms}` })
        // // }
    } catch (err) {
        next(err)
    }
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
router.get('/:id', async (req, res, next) => {
    //res.render('houses/one')
    //find the house //populate host
    let house = await Houses.findById(req.params.id).populate('host')
    //console.log(house)
    //pass house to template
    res.render('houses/one', { user: req.user, house })
})
router.get('/:id/edit', async (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.redirect('/auth/login')
        } else {
            let house = await Houses.findById(req.params.id)
            res.render('houses/edit', { user: req.user, house })
        }
    } catch (err) {
        next(err)
    }
})
router.post('/', async (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.redirect('/auth/login')
        } else {
            req.body.host = req.user._id
            //console.log(req.body.host)
            let house = await Houses.create(req.body)
            //console.log(house)
            res.redirect(`/houses/${house._id}`)
        }
    } catch (err) {
        next(err)
    }
})

router.patch('/:id', (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            res.redirect(`/houses/${house._id}`)
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
