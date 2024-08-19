const pokemonsModel = require ('../models/pokemonsModel');

async function getPokemonByIdOrNameMiddleware (req, res, next) {
    const { param } = req.params;
    var pokemon;

    if (isNaN(param)) {
        pokemon = await pokemonsModel.modelGetPokemonByName(param);
    } else {
        pokemon = await pokemonsModel.modelGetPokemonByID(param);
    }

    if (!pokemon) {
        return res.status(404).send("❌ Este Pokémon não está cadastrado. 😓");
    }

    next();
}

async function postPokemonMiddleware (req, res, next) {
    const { param } = req.params;
    const { nome, tipo, pv, custo_retirada, evolucao, img, fraqueza } = req.body;

    if (!nome || !tipo || !pv || !custo_retirada || !evolucao || !img || !fraqueza) {
    return res.status(400).send("❌ Dados incompletos, por favor preencha todos os campos") 
    }

    var pokemon;

    if (isNaN(param)) {
        pokemon = await pokemonsModel.modelGetPokemonByName(param);
    } else {
        pokemon = await pokemonsModel.modelGetPokemonByID(param);
    }

    if(pokemon) {
        return res.status(400).send ("❌ O Pokémon que você tentou inserir já está cadastrado! 😁👍");
    }

    next();
}

async function putPokemonMiddleware (req, res, next) {
    const { id } = req.params;

    // Verifica se o ID foi passado
    if (!id) {
        return res.status(400).send("❌ Não existe nenhum Pokémon vinculado ao ID informado. Por favor, tente informar um novo ID.");
    }

    try {
        // Verifica se o Pokémon existe
        const pokemon = await pokemonsModel.modelGetPokemonByID(id);

        if (!pokemon) {
            return res.status(404).send("❌ Pokémon não encontrado. 😓");
        }

        // Se o Pokémon existir, passa para o próximo middleware/controller
        next();
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

async function deletePokemonMiddleware (req, res, next) {
    const { id } = req.params;

    try {
        // Primeiro, verificamos se o Pokémon existe
        const pokemon = await pokemonsModel.modelGetPokemonByID(id);

        if (!pokemon) {
            return res.status(404).send("❌ O Pokémon que deseja excluir não foi encontrado. 😓");
        }

        // Se o Pokémon foi encontrado, passamos o controle para o próximo middleware/controller
        next();
    } catch (error) {
        return res.status(400).send(error.message);
    }

}


module.exports = {
    getPokemonByIdOrNameMiddleware,
    postPokemonMiddleware,
    putPokemonMiddleware,
    deletePokemonMiddleware
}