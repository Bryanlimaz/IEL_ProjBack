const express = require ('express');
const router = express.Router();
const varianteController = require ('../controllers/varianteController');
const varianteMiddleware = require ('../middlewares/varianteMiddleware');
const pokemonsController = require ('../controllers/pokemonsController');
const pokemonsMiddleware = require ('../middlewares/pokemonsMiddleware');
const validadeMiddleware = require('../middlewares/validateMiddleware')
const validateToken = require ('../helpers/validateToken')
const decryptedPassword = require ('../helpers/decryptPassword')

router.get ('/variantes', varianteController.getAllVariantes);
router.post ('/variantes', validadeMiddleware , varianteController.postVariante);
router.get ('/pokemons', pokemonsController.getAllPokemons);
// router.get ('/pokemons/:id', pokemonsController.getPokemonByID);
// router.get ('/pokemons/:nome', pokemonsController.getPokemonByName);
router.get('/pokemons/:param', pokemonsMiddleware.getPokemonByIdOrNameMiddleware, pokemonsController.getPokemon);
router.post ('/pokemons', validadeMiddleware, pokemonsMiddleware.postPokemonMiddleware, pokemonsController.postPokemon);
router.put ('/pokemons/:id', /*validateToken, decryptedPassword,*/ pokemonsMiddleware.putPokemonMiddleware, pokemonsController.putPokemon);
router.delete ('/pokemons/:id', /*validateToken, decryptedPassword,*/ pokemonsMiddleware.deletePokemonMiddleware, pokemonsController.deletePokemon);


module.exports = router;