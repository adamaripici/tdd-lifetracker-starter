const express = require("express")
const Activity = require("../models/activity")
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")
const router = express.Router()

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // create a nutrition post
        const { user } = res.locals
        console.log(22,user)
        const totalPerDay = await Activity.totalCaloriesPerDay({user})
        const avgPerDay = await Activity.avgCaloriesPerCategory({user})
        return res.status(200).json({totalPerDay, avgPerDay})
    } catch(err) {
        next(err)
    }
})


module.exports = router