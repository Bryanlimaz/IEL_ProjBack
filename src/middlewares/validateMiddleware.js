const encryptPassword = require ('../helpers/encryptPassword')

async function validateMiddleware (requisition, response, next) {
    const { password } = requisition.body

    if (!password) {
        return response.status (400).json ({ message: 'Senha é obrigatória!' })
    }

    try {
        const encryptedPassword = encryptPassword (password)
        response.status (200).json 
            ({ message: 'Senha registrada com sucesso!', encryptedPassword })
    } catch (error) {
        return response.status (500).json 
            ({ message: 'Erro ao criptografar a senha', error: error.message })
    }

    next()
}

module.exports = validateMiddleware