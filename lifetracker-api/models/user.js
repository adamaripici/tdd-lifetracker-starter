const db = require("../db")
const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        // submit email and password
        //  Unknown email throws UnauthorizedError
        // 
        //  Invalid credentials throws UnauthorizedError
        throw new UnauthorizedError("Invalid email/password combo")
    }

    static async register(credentials) {
        // User can successfully register with proper credentials
    }
}

module.exports = User