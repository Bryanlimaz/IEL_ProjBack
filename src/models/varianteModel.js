// O que falta:
// 1- Tratamento de Erros
// 2- Verificação de Resultados

const connection = require ('./connection');

async function modelGetAllVariantes() {
    try {
        const variantes = await connection.query('SELECT * FROM variante');
        return variantes.rows;
    } catch (error) {
        console.error('Erro ao buscar variantes:', error);
        throw new Error('Erro ao buscar variantes');
    }
}

async function modelCreateVariante(nome) {
        await connection.query (
            `INSERT INTO variante (nome)
            VALUES ('${nome}')`
            );

        return;
}

async function modelUpdateVariante(id, nome){
    await connection.query(`
        UPDATE variante SET nome = ${nome} WHERE id = ${id}
    `)

    return;
}

async function modelDeleteVariante (id) {
    await connection.query (
        `DELETE FROM variante
        WHERE id = ${id}
        `)

    return;
}

module.exports = {
    modelGetAllVariantes,
    modelCreateVariante,
    modelUpdateVariante,
    modelDeleteVariante
};