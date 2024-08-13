const express = require ('express');
const router = express.Router ();
const varianteController = require ('../controllers/varianteController');

router.get ('/variantes', varianteController.getAllVariantes);


module.exports = router;