// O que falta:
// 1- Validação de req.user
// 2- Tratamento de erros
// 3- Resposta JSON 

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/usersModel');
const crypto = require('crypto');

dotenv.config();

const jwSecret = process.env.JWT_SECRET;

async function login(req, res) {
    try {
        const { email, password } = req.body;

        // Verifica se o email e a senha foram fornecidos
        if (!email || !password) {
            return res.status(400).json({ error: 'Email e senha são obrigatórios' });
        }

        // Procura o usuário no banco de dados
        const user = await User.findOne({ where: { email } }); // Use o método correto do ORM
        if (!user) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Verifica se a senha está correta
        const isPasswordValid = await crypto.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        // Gera o token JWT
        const { id } = user;
        const token = jwt.sign({ id, email }, jwSecret, { expiresIn: '1h' });

        console.log(token);
        return res.json({ token }); // Resposta JSON
    } catch (error) {
        // Tratamento de erros
        console.error('Erro ao autenticar usuário:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

// async function login(req, res){
//     const {id, email} = req.user;

//     const token = jwt.sign({id, email}, jwSecret,{ expiresIn: '1h'});

//     console.log (token)
//     return res.send(token);
// }

module.exports = login