// const express = require ('express')
// const router = express.Router()
const encryptPassword = require ('../helpers/encryptPassword')
const validateMiddleware = require ('../helpers/validateMiddleware')

router.post ('/register', validateMiddleware, (requisition, response) => {
    const { password } = requisition.body
    const encryptedPassword = encryptPassword (password)

    response.status (200).json ({ message: 'Senha registrada com sucesso!' })
});

module.exports = validateMiddleware