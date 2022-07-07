const express = require("express")
const User = require("../models/user")
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")
const router = express.Router()


router.post("/login", async (req, res, next) => {
    try {
        const user = await User.login(req.body)
        const token = createUserJwt(user)
        return res.status(200).json({ user, token })
    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        const user = await User.register(req.body)
        const token = createUserJwt(user)
        return res.status(201).json({ user, token })
    } catch(err) {
        next(err)
    }
})

// get request to /me endpoint
// It should send a JSON response back to the client with 
// the user info like so: { "user": { "email": "user@gmail.com", ... } }
router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      const { email } = res.locals.user
      const user = await User.fetchUserByEmail(email)
      const publicUser ={id: user.id,
        email: user.email,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        createdAt: user.created_at}
      return res.status(200).json({ user: publicUser })
    } catch (err) {
      next(err)
    }
  })

module.exports = router