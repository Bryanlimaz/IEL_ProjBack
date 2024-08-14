const pokemonsModel = require ('../models/pokemonsModel');

async function getAllPokemons(req, res) {
    const pokemons = await pokemonsModel.modelGetAllPokemons();

    return res.send(pokemons);
}

async function postPokemon (req, res) {
    const { nome, tipo, pv, custo_retirada, evolucao, img } = req.body;

    await pokemonsModel.modelCreatePokemon (nome, tipo, pv, custo_retirada, evolucao, img);

    res.status(201).send("🟢 Pokémon inserido com sucesso! 😁👍");
}

module.exports = {
    getAllPokemons,
    postPokemon
}