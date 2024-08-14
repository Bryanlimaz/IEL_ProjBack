const express = require ('express');
const router = express.Router ();
const varianteController = require ('../controllers/varianteController');
const validateToken = require ('../helpers/validateToken')
const decryptedPassword = require ('../helpers/decryptedPassword')

router.get ('/variantes', varianteController.getAllVariantes);


module.exports = router;