// O que falta:
// 1- Tratamento de Erros
// 2- Verificação de Resultados 

const connection = require('./connection');

async function getUserByEmail(email){
    const user = await connection.query(`
        SELECT * FROM usuarios where email = '${email}'
    `)

    return user.rows[0];
}

module.exports = {
    getUserByEmail
}