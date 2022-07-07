const bcrypt = require("bcrypt")
const db = require("../db")
const { BCRYPT_WORK_FACTOR } = require("../config")
const { BadRequestError, UnauthorizedError } = require("../utils/errors")

class User {
    static async makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            createdAt: user.created_at
        }
    }
    static async login(credentials) {
        // submit email and password
        //  Unknown email throws UnauthorizedError
        // 
        //  Invalid credentials throws UnauthorizedError
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        const user = await User.fetchUserByEmail(credentials.email)

        if (user) {
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid) {
                return User.makePublicUser(user)
            }
        }

        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        // User can successfully register with proper credentials
        const requiredFields = ["email", "username", "firstname", "lastname", "password", "confirmPass"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        if (credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError("Invalid email.")
        }

        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }

        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)
        const lowercasedEmail = credentials.email.toLowerCase()

        const result = await db.query(`
            INSERT INTO users (
                email,
                password,
                firstname,
                lastname,
                username
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, username, updated_at, created_at;
        `, [lowercasedEmail,hashedPassword,credentials.username, credentials.firstname, credentials.lastname])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }

        const query =  `SELECT * FROM users WHERE email = $1`

        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }

    static async fetchUserByUsername(username) {
        if (!username) {
          throw new BadRequestError("No username provided")
        }
    
        const query = `SELECT * FROM users WHERE username = $1`
    
        const result = await db.query(query, [username])
    
        const user = result.rows[0]
    
        return user
      }
    
}

module.exports = User