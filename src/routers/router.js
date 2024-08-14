const express = require ('express');
const router = express.Router();
const varianteController = require ('../controllers/varianteController');
const pokemonsController = require ('../controllers/pokemonsController');
const pokemonsMiddleware = require ('../middlewares/pokemonsMiddleware');
const validateToken = require ('../helpers/validateToken')
const decryptedPassword = require ('../helpers/decryptPassword')

router.get ('/variantes', validateToken, decryptedPassword, varianteController.getAllVariantes);
router.get ('/pokemons', pokemonsController.getAllPokemons);
router.post ('/pokemons', pokemonsController.postPokemon);


module.exports = router;