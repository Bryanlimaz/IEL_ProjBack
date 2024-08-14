const connection = require ('./connection');

async function modelGetAllVariantes() {
    const variantes = await connection.query(
        'SELECT * FROM variante'
    )

    return variantes.rows;
}


async function deketePokemon(id) {
    try {
        // Executa a query de DELETE para remover a variante com o id fornecido
        await connection.query(
            `DELETE FROM pokemons WHERE id ${id}` ,
        );

        console.log(`Variante com ID ${id} deletada com sucesso.`);
    } catch (error) {
        console.error('Erro ao deletar a variante:', error);
    }
}



async function pegandoPokemon(id) {
    try {
        // Executa a query de DELETE para remover a variante com o id fornecido
        await connection.query(
            `SELECT * FROM pokemons WHERE id ${id}` ,
        );

        console.log(`Pegando ${id} .`);
    } catch (error) {
        console.error('Erro ao deletar a variante:', error);
    }
}


module.exports = {
    modelGetAllVariantes,
    deketePokemon,
    pegandoPokemon

}