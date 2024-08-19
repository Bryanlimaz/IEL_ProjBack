const variantesModel = require ('../models/varianteModel');

async function getAllVariantes(req, res) {
    try {
        var variantes = await variantesModel.modelGetAllVariantes();
    } catch (error) {
        return res.status(400).send(error.message);
    }

    return res.send(variantes);
}

async function postVariante (req, res) {
    const { nome } = req.body;

    try {
        await variantesModel.modelCreateVariante(nome);
    } catch (error) {
        return res.status(400).send(error.message);
    }

    res.status(201).send("🟢 Variante de Pokémon adicionada com sucesso! 😁👍");
}

module.exports = {
    getAllVariantes,
    postVariante
};