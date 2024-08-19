const pokemonsModel = require ('../models/pokemonsModel');

async function getAllPokemons(req, res) {
    
    try {
        var pokemons = await pokemonsModel.modelGetAllPokemons();
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.send(pokemons);
}

async function getPokemonByID (req, res) {
    const { id } = req.params;

    try {
// Executa a query de GET para mostrar o pokémon com o ID fornecido
// Utilizado a palavra reservada VAR pois a variável está inserida dentrod e um escopo de bloco, e preciso resgatá-la fora deste escopo.
        var pokemonID = await pokemonsModel.modelGetPokemonByID(id);
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.status(200).send (pokemonID);
}

// async function getPokemonByName (req, res) {
//     const { nome } = req.params;

//     try {
//         var pokemonName = await pokemonsModel.modelGetPokemonByName(nome);
//     } catch (error) {
//         return res.status(400).send(error.message);
//     }

//     return res.status(200).send (pokemonName);
// }

// async function getPokemon (req, res) {
//     const { param } = req.params;

//     try {
//         var pokemon;
//         if (isNaN(param)) { // Se não for um número, busca por nome
//             pokemon = await pokemonsModel.modelGetPokemonByName(param);
//         } else { // Se for um número, busca por ID
//             pokemon = await pokemonsModel.modelGetPokemonByID(param);
//         }

//     } catch (error) {
//         return res.status(400).send(error.message);
//     }

//     return res.status(200).send(pokemon);
// }

async function postPokemon (req, res) {
    const { nome, tipo, pv, custo_retirada, evolucao, img, fraqueza } = req.body;

    try {
        await pokemonsModel.modelCreatePokemon (nome, tipo, pv, custo_retirada, evolucao, img, fraqueza);
    } catch (error) {
        return res.status(400).send(error.message);
    }

    res.status(201).send("🟢 Pokémon adicionado com sucesso! 😁👍");
}

async function putPokemon (req, res) {

    const { id } = req.params;
    const { nome, tipo, pv, custo_retirada, evolucao, img, fraqueza } = req.body;

    try {
        await pokemonsModel.modelUpdatePokemon(id, nome, tipo, pv, custo_retirada, evolucao, img, fraqueza)
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.status(201).send("🟢 Informações do Pokémon atualizadas com sucesso! 😁👍");
}

async function deletePokemon (req, res) {
    const { id } = req.params;

    try {
// Executa a query de DELETE para remover o pokémon com o ID fornecido
        await pokemonsModel.modelDeletePokemon(id)
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.status(200).send("🟢 Pokémon removido com sucesso! 😁👍");
}

module.exports = {
    getAllPokemons,
    getPokemonByID,
    // getPokemonByName,
    // getPokemon,
    postPokemon,
    putPokemon,
    deletePokemon
}