const JWT = require ('jsonwebtoken')
const dotenv = require ('dotenv')

dotenv.config()

const JWTSecret = process.env.JWT_SECRET

if (!JWTSecret) {
    throw new Error ('JWT_SECRET não está definido...')
}

async function validateToken (token) {
    try {
        JWT.verify (token, JWTSecret)

        return true
    } catch (error) {
        console.error ('Erro ao validar o token:', error.message)

        return false
    }
}

module.exports = validateToken