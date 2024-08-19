const dotenv = require ('dotenv')
const crypto = require ('crypto')

dotenv.config()

function encryptPassword (password) {
    const secret_key = process.env.SECRET_KEY

    const hash = crypto
        .createHash ('sha256')
        .update (secret_key)
        .digest ('base64')
        .substr (0, 32)

    const iv = crypto.randomBytes (16)

    const cipher = 
        crypto.createCipheriv ('aes-256-cbc', hash, iv)

    let encrypted = cipher.update (password)
    encrypted = Buffer.concat ([encrypted, cipher.final()])
    
    const pass =
        iv.toString ('hex') + ':' + encrypted.toString ('hex')

    return pass
}

module.exports = encryptPassword