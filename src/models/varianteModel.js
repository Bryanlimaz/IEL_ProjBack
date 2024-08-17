// O que falta:
// 1- Tratamento de Erros
// 2- Verificação de Resultados

const connection = require ('./connection');

async function modelGetAllVariantes() {
    const variantes = await connection.query(
        'SELECT * FROM variante'
    )

    return variantes.rows;
}

module.exports = {
    modelGetAllVariantes
}