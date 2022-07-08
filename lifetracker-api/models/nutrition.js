const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Nutrition {
    static async listNutritionForUser() {
        const results = await db.query(
            `
            SELECT n.id,
                   n.name,
                   n.category,
                   n.calories,
                   n.quantity,
                   n.image_url AS "imageUrl",
                   n.user_id AS "userId",
                   u.email AS "userEmail",
                   n.created_at AS "createdAt"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            ORDER BY n.created_at DESC
            `
        )
        return results.rows
    }

    static async fetchNutritionById(nutritionId) {
        const results = await db.query(
            `
            SELECT n.id,
                   n.name,
                   n.category,
                   n.calories,
                   n.quantity,
                   n.image_url AS "imageUrl",
                   n.user_id AS "userId",
                   u.email AS "userEmail",
                   n.created_at AS "createdAt"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.id = $1
            `,[nutritionId]
        )
        const post = results.rows[0]

        if (!post) {
            throw new NotFoundError()
        }

        return post
    }

    static async createNutrition({user, post}) {
        const requiredFields = ["name", "category", "calories", "image_url","quantity"]
        requiredFields.forEach(field => {
            if (!post.hasOwnProperty(field)) {
                throw new BadRequestError(`Required field - ${field} - missing from request body.`)
            }
        })
        console.log(user.email)
        const result = await db.query(
            `
            INSERT INTO nutrition (user_id, name, category, quantity, calories, image_url)
            VALUES ((SELECT id FROM users WHERE email = $1), $2, $3, $4, $5, $6)
            RETURNING id,
                    user_id AS "userId",
                    name,
                    category,
                    quantity,
                    calories,
                    image_url AS "imageUrl",
                    created_at AS "createdAt"
            `, 
            [user.email, post.name, post.category, post.quantity, post.calories, post.image_url]
        )
        return result.rows[0]
    }

}

module.exports = Nutrition