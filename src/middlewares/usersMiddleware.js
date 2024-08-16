const usersModel = require("../models/usersModel");

async function insertUserMiddleware(req, res, next) {
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).send("Dados Inválidos");
  }

  if (nome.includes("1", "2", "3", "4", "5", "6", "7", "8", "9") || sobrenome.includes("1", "2", "3", "4", "5", "6", "7", "8", "9")) {
    return res.status(400).send("Nome ou Sobrenome Inválidos");
  }

  if (senha.length < 8) {
    return res.status(400).send("A senha deve conter pelo menos 8 caracteres");
  }

  if (!email.includes("@") || !email.includes(".")) {
    return res.status(400).send("Email Inválido");
  }

  next();
}

async function getUserMiddleware(req, res, next) {
  const { id } = req.params;
  const user = await usersModel.getUserByIdModel(id);

  if (!user) {
    return res.status(404).send("Usuário não encontrado");
  }

  next();
}

async function updateUserMiddleware(req, res, next) {
  const { id } = req.params;
  const { email, senha } = req.body;

  if (!id || !email || !senha) {
    return res.status(400).send("Dados incompletos");
  }

  const user = await usersModel.getUserByIdModel(id);

  if (!user) {
    return res.status(404).send({
      message: "Usuário não encontrado",
    });
  }

  next();
}

async function deleteUserMiddleware(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Dados incompletos");
  }

  const user = await usersModel.getUserByIdModel(id);

  if (!user) {
    return res.status(404).send({
      message: "Usuário não encontrado",
    });
  }

  next();
}

module.exports = {
  insertUserMiddleware,
  getUserMiddleware,
  updateUserMiddleware,
  deleteUserMiddleware,
};
