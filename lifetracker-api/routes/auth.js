const express = require("express")
const User = require("../models/user")
const router = express.Router()

// get request to /me endpoint
// It should send a JSON response back to the client with 
// the user info like so: { "user": { "email": "user@gmail.com", ... } }
// router.get("/me", async(req, res, next) => {
//     try {
//         const posts = await
//         res.status(200).json({})
//     } catch (err) {
//         next(err)
//     }
// })

router.post("/login", async (req, res, next) => {
    try {
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        const user = await User.register(req.body)
        return res.status(201).json({user})
    } catch(err) {
        next(err)
    }
})

module.exports = router