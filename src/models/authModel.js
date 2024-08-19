// O que falta:
// 1- Tratamento de Erros
// 2- Verificação de Resultados 

const connection = require('./connection');

async function getUserByEmail(email){
    try {
        const user = await connection.query(`
            SELECT * FROM usuarios WHERE email = $1
        `, [email]);

        return user.rows[0];
    } catch (error) {
        console.error('Erro ao buscar usuário por email:', error);
        throw new Error('Erro ao buscar usuário por email');
    }

    // const user = await connection.query(`
    //     SELECT * FROM usuarios where email = '${email}'
    // `)

    // return user.rows[0];
}

module.exports = {
    getUserByEmail
}