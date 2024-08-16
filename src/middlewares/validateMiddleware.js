const encryptPassword = require ('../helpers/encryptPassword')

async function validateMiddleware (requisition, response, next) {
    const { password } = requisition.body
    const encryptedPassword = encryptPassword (password)

    response.status (200).json ({ message: 'Senha registrada com sucesso!' })

    next()
}

module.exports = validateMiddleware