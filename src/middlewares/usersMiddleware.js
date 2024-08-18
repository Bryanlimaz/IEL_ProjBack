// O que falta:
// 1- Tratamento de Erros
// 2- Validação de Dados 

const usersModel = require("../models/usersModel");

async function insertUserMiddleware(req, res, next) {
  const { nome, sobrenome, email, senha } = req.body;
  const temNumero = /\d/ //Limitador Regex
  
  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).send("Dados Inválidos");
  }


if (temNumero.test(nome) || temNumero.test(sobrenome)) {
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