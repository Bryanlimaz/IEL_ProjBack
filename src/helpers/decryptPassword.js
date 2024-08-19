const dotenv = require ('dotenv')
const crypto = require ('crypto')

dotenv.config()

function decryptedPassword (password) {
    const key = process.env.SECRET_KEY

    const hash = crypto
        .createHash ('sha256')
        .update (key)
        .digest ('base64')
        .substr (0, 32)

    const [ivHex, encryptedHex] = password.split (':')
    
        const iv = Buffer.from (ivHex, 'hex')
        const encrypted = Buffer.from (encryptedHex, 'hex')

        const decipher = crypto.createDecipheriv ('aes-256-cbc', hash, iv)

        let decrypted = decipher.update (encrypted)
        decrypted = Buffer.concat ([decrypted, decipher.final()])

        return decrypted.toString()

    // const iv = Buffer.from (ivHex, 'hex')
    // const encrypted = Buffer.from (encryptedHex, 'hex')

    // const decipher = crypto.createDecipheriv ('aes-256-cbc', hash, iv)

    // let decrypted = decipher.update (encrypted)
    // decrypted = Buffer.concat ([decrypted, decipher.final()])

    // return decrypted.toString()
}

module.exports = decryptedPassword