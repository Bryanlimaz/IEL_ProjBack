const express = require ('express');
const router = express.Router ();
const varianteController = require ('../controllers/varianteController');
<<<<<<< Updated upstream
=======
const validateToken = require ('../helpers/validateToken')
const decryptedPassword = require ('../helpers/decryptPassword')
>>>>>>> Stashed changes

router.get ('/variantes', varianteController.getAllVariantes);


module.exports = router;