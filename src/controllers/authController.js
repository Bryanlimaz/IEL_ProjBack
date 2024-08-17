// O que falta:
// 1- Validação de req.user
// 2- Tratamento de erros
// 3- Resposta JSON 

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwSecret = process.env.JWT_SECRET;

async function login(req, res){
    const {id, email} = req.user;

    const token = jwt.sign({id, email}, jwSecret,{ expiresIn: '1h'});

    console.log (token)
    return res.send(token);
}

module.exports = login