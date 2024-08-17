// O que falta:
// 1- Validação de Erros
// 2- Validação de Dados 

const variantesModel = require ('../models/varianteModel');

async function getAllVariantes(req, res) {
    const variantes = await variantesModel.modelGetAllVariantes();

    return res.send(variantes);
}

module.exports = {
    getAllVariantes
}