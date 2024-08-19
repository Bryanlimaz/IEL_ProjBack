// O que falta:
// 1- Tratamento de Erros

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

  try {
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao processar solicitação' });
  }
}

async function getUserMiddleware(req, res, next) {
  const { id } = req.params;

  try {
    const user = await usersModel.getUserByIdModel(id);

    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
}

async function updateUserMiddleware(req, res, next) {
  const { id } = req.params;
  const { email, senha } = req.body;

  if (!id || !email || !senha) {
    return res.status(400).send("Dados incompletos");
  }

  try {
    const user = await usersModel.getUserByIdModel(id);

    if (!user) {
      return res.status(404).send({
        message: "Usuário não encontrado",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
}

async function deleteUserMiddleware(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Dados incompletos");
  }

  try {
    const user = await usersModel.getUserByIdModel(id);

    if (!user) {
      return res.status(404).send({
        message: "Usuário não encontrado",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
}

module.exports = {
  insertUserMiddleware,
  getUserMiddleware,
  updateUserMiddleware,
  deleteUserMiddleware,
};