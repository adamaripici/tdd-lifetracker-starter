const express = require("express")
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")
const permissions = require("../middleware/permissions")
const router = express.Router()

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        // create a nutrition post
        const { user } = res.locals
        console.log(user)
        const post = await Nutrition.createNutrition({ user, post: req.body})
        return res.status(201).json({post})
    } catch(err) {
        next(err)
    }
})

router.get("/", security.requireAuthenticatedUser,async (req, res, next) => {
    try {
        //list all nutrition
        const {user} = res.locals;
        const posts = await Nutrition.listNutritionForUser({user})
        return res.status(200).json({posts})
    } catch(err) {
        next(err)
    }
})

router.get("/id/:nutritionId", async (req, res, next) => {
    try {
        // fetch single post
        const { nutritionId } = req.params
        console.log(nutritionId)
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({nutrition})
    } catch(err) {
        next(err)
    }
})


module.exports = router