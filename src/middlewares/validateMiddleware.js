const encryptPassword = require ('../helpers/encryptPassword')
const validate = require('../helpers/validateToken')

async function validateMiddleware (requisition, response, next) {
    const { authorization } = requisition.headers

    console.log(authorization)

    const verifica = validate(authorization)

    if(!verifica){
        response.status(401).send('Falhou')
    }

    next()
}

module.exports = validateMiddleware

// const encryptPassword = require ('../helpers/encryptPassword')

// async function validateMiddleware (requisition, response, next) {
//     const { password } = requisition.body
//     const encryptedPassword = encryptPassword (password)

//     response.status (200).json ({ message: 'Senha registrada com sucesso!' })

//     next()
// }

// module.exports = validateMiddleware