const variantesModel = require ('../models/varianteModel');

async function getAllVariantes(req, res) {
    const variantes = await variantesModel.modelGetAllVariantes();

    return res.send(variantes);
}

module.exports = {
    getAllVariantes
}