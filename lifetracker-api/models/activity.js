const db = require("../db")
const { BadRequestError, NotFoundError } = require("../utils/errors")
const Nutrition = require("./nutrition")

class Activity {
    static async totalCaloriesPerDay({user}) {
        console.log(30,user)
        if (!user) {
            throw new BadRequestError("Please provide user")
        }

        const results = await db.query ( 
            `
            SELECT to_char(n.created_at, 'dd-MM-yy') AS date,
            SUM(n.calories)
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE u.email = $1
            GROUP BY date
            ORDER BY date DESC
            `,[user.email]
            )
            console.log("hi")
        // if (!results) {
        //     throw new NotFoundError
        // }

        return results.rows
    }
    static async avgCaloriesPerCategory({user}) {
        const results = await db.query ( 
            `
        SELECT n.category AS "category",
        CAST(AVG(n.calories) AS DECIMAL(10,1))
        FROM nutrition AS n
            JOIN users AS u ON u.id = n.user_id
        WHERE u.email = $1
        GROUP BY category;
        `,[user.email]
        )
        return results.rows
    }

}

module.exports = Activity