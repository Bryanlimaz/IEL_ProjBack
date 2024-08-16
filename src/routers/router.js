const express = require ('express');
const router = express.Router();
const varianteController = require ('../controllers/varianteController');
const varianteModel = require ('../models/varianteModel');
const pokemonsController = require ('../controllers/pokemonsController');
const pokemonsMiddleware = require ('../middlewares/pokemonsMiddleware');
const validateToken = require ('../helpers/validateToken')
const decryptedPassword = require ('../helpers/decryptPassword')

router.get ('/pokemons', pokemonsController.getAllPokemons);
router.post ('/pokemons', pokemonsController.postPokemon);


module.exports = router;