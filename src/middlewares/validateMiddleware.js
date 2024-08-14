const connection = require('./connection');
const pokemon = require('./model/varianteModel')

async function checkPokemonExists(req, res, next) {
    const { nome } = req.params; // Supondo que o nome do Pokémon vem como parâmetro na URL

    try {
        const result = await connection.query(
            `SELECT * FROM pokemon WHERE nome = ${nome}`,
        
        );

        // if (result.rows.length > 0) {
        //     // Pokémon encontrado, continue para a próxima função/middleware
        //     next();
        // } else {
        //     // Pokémon não encontrado, retorne um erro
        //     res.status(404).json({ error: `Pokémon com o nome ${nome} não encontrado.` });
        // }
    } catch (error) {
        console.error('Erro ao verificar o Pokémon:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}




async function middlewareDeleteAnime(req, res, next) {
    const { nome } = req.params;
  
    if (!nome) {
      return res.status(400).send("Pokemon nao encontrado");
    }
  
    const pokemon = await pokemon.pegandoPokemon(id);
  
    if (!pokemon) {
      return res.status(404).send("pokemon não encontrado");
    }
  
    next();
  }

module.exports = 
    checkPokemonExists,
    middlewareDeleteAnime

;