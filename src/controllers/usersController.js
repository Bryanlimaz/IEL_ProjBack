// O que falta:
// 1- Tratamento de erros
// 2- Status de Resposta Consistente 

const userModel = require("../models/usersModel");
const encryptPassword = require("../helpers/encryptPassword");

async function createUser(req, res) {
  const { nome, sobrenome, email, senha } = req.body;

  const pass = await encryptPassword(senha);

  try {
    await userModel.insertUserModel(nome, sobrenome, email, pass);
    return res.status(201).send("Usuário cadastrado com sucesso");
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsersModel();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const user = await userModel.getUserByIdModel(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { email, senha } = req.body;

  try {
    await userModel.updateUserModel(id, email, senha);
    return res.status(200).send("Dados atualizados com sucesso");
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    await userModel.deleteUserModel(id);
    return res.status(200).send("Usuário excluído com sucesso");
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir usuário' });
  }
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};