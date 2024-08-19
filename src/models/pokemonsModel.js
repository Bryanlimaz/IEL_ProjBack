const connection = require ('./connection');

async function modelGetAllPokemons() {
    
    const pokemons = await connection.query(
        'SELECT * FROM pokemons'
    )

    return pokemons.rows;
}

async function modelGetPokemonByID(id) {
    const pokemonID = await connection.query(
// Esse método de query usa "$1" como um placeholder para o valor "id", que é passado como um array de parâmetros no segundo argumento do método "query". Isso ajuda a prevenir ataques de SQL injection e torna a aplicação mais segura.
        `SELECT * FROM pokemons WHERE id = $1`, [id]
    );

    return pokemonID.rows[0];
}

async function modelGetPokemonByName (nome) {
    const pokemonName = await connection.query (
        `SELECT * FROM pokemons WHERE nome LIKE $1`, [`%${nome}%`] //Com tipo string eu devo usar "LIKE".
    )

    return pokemonName.rows[0];
}

async function modelCreatePokemon (nome, tipo, pv, custo_retirada, evolucao, img, fraqueza) {
    
    await connection.query ( //Não precisei criar a 'const' para o 'await' pois não irei retornar nada, apenas inserir direto no DB.
        `INSERT INTO pokemons (nome, tipo, pv, custo_retirada, evolucao, img, fraqueza)
        VALUES (
            '${nome}',
            ${tipo},
            ${pv},
            ${custo_retirada},
            ${evolucao},
            '${img}',
            '${fraqueza}'
        )
    `)

    return; // Não precisarei retornar nada pois não estou fazendo nada além de inserir dados no DB.
}

async function modelUpdatePokemon(id, nome, tipo, pv, custo_retirada, evolucao, img, fraqueza) {
    const result = await connection.query(
        `UPDATE pokemons
         SET nome = $1, tipo = $2, pv = $3, custo_retirada = $4, evolucao = $5, img = $6, fraqueza = $7
         WHERE id = $8`,
        [nome, tipo, pv, custo_retirada, evolucao, img, fraqueza, id]
    );

    return result.rowCount > 0; // Retorna true se alguma linha foi atualizada
}

async function modelDeletePokemon(id) {

    await connection.query(
        `DELETE FROM pokemons WHERE id = '${id}'`
    );

    return;
}

module.exports = {
    modelGetAllPokemons,
    modelGetPokemonByID,
    modelGetPokemonByName,
    modelCreatePokemon,
    modelUpdatePokemon,
    modelDeletePokemon
}