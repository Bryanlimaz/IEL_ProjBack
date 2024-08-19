const JWT = require ('jsonwebtoken')
const dotenv = require ('dotenv')

dotenv.config()

const JWTSecret = process.env.JWT_SECRET

async function validateToken (token) {

    try {
        JWT.verify (token, JWTSecret)

        return true
    } catch (error) {
        console.error (error.message)

        return false
    }
}

module.exports = validateToken