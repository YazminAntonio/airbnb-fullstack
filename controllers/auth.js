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

router.post('/login', async (req, res, next) => {
    try {
        let user = await Users.findOne({
            email: req.body.email,
            password: req.body.password
        })
        console.log(user)
        if (user) {
            req.login(user, err => {
                res.redirect('/houses')
            })
        } else {
            throw new Error('User and password are not correct')
        }
    } catch (err) {
        next(err)
    }
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
                    console.log(userJustCreate)
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
