const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")

class Nutrition {
    static async listNutritionForUser({user}) {
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
            WHERE n.user_id = (SELECT users.id FROM users WHERE email = $1)
            ORDER BY n.created_at DESC
            `,[user.email]
        )
        return results.rows
    }

    static async fetchNutritionById(id){
        if(!id) {
            throw new BadRequestError("Please provide ID")
        }
        const results = await db.query ( 
            `
            SELECT n.id,
                n.name,
                n.category,
                n.calories,
                n.quantity,
                n.image_url AS "imageUrl",
                u.email AS "userEmail",
                n.user_id AS "userId",
                n.created_at AS "createdAt"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.id = $1
            `,[id]
            )
    

        const nutrition = results.rows[0]
        if(!nutrition){
            throw new NotFoundError
        }
        return nutrition
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