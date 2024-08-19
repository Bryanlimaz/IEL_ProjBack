const dotenv = require ('dotenv')
const crypto = require ('crypto')

dotenv.config()

function decryptedPassword (encryptedHex, ivHex) {
    const key = process.env.SECRET_KEY

    const hash = crypto
        .createHash ('sha256')
        .update (key)
        .digest ('base64')
        .substr (0, 32)

    const iv = Buffer.from (ivHex, 'hex')
    const encrypted = Buffer.from (encryptedHex, 'hex')

    const decipher = crypto.createDecipheriv ('aes-256-cbc', hash, iv)

    let decrypted = decipher.update (encrypted)
    decrypted = Buffer.concact ([decrypted, decipher.final()])

    return decrypted.toString()
}

module.exports = decryptedPassword