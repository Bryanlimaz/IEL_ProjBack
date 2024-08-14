const express = require ('express');
const router = express.Router ();
const pokemonsController = require ('../controllers/pokemonsController');
const pokemonsMiddleware = require ('../middlewares/pokemonsMiddleware');

router.get ('/pokemons', pokemonsController.getAllPokemons);
router.post ('/pokemons', pokemonsController.postPokemon);


module.exports = router;