const dotenv = require ('dotenv')
const crypto = require ('crypto')

dotenv.config()

function decryptedPassword (password) {
    const key = process.env.SECRET_KEY

    if (!key) {
        throw new Error ('SECRET_KEY não está definido...')
    }

    const hash = crypto
        .createHash ('sha256')
        .update (key)
        .digest ('base64')
        .substr (0, 32)

    // const [ivHex, encryptedHex] = password.split (':')
    const parts = password.split(':')

    if (parts.length !== 2) {
        throw new Error ('Senha inválida...')
    }

    const [ivHex, encryptedHex] = parts

    try {
        const iv = Buffer.from (ivHex, 'hex')
        const encrypted = Buffer.from (encryptedHex, 'hex')

        const decipher = crypto.createDecipheriv ('aes-256-cbc', hash, iv)

        let decrypted = decipher.update (encrypted)
        decrypted = Buffer.concat ([decrypted, decipher.final()])

        return decrypted.toString()
    } catch (error) {
        throw new Error ('Erro ao descriptografar a senha: ' + error.message)
    }

    // const iv = Buffer.from (ivHex, 'hex')
    // const encrypted = Buffer.from (encryptedHex, 'hex')

    // const decipher = crypto.createDecipheriv ('aes-256-cbc', hash, iv)

    // let decrypted = decipher.update (encrypted)
    // decrypted = Buffer.concat ([decrypted, decipher.final()])

    // return decrypted.toString()
}

module.exports = decryptedPassword