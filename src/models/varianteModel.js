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