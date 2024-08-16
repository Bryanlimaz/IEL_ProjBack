const userModel = require("../models/usersModel");
const encryptPassword = require("../helpers/encryptPassword");

async function createUser(req, res) {
  const { nome, sobrenome, email, senha } = req.body;

  const pass = await encryptPassword(senha);

  try {
    await userModel.insertUserModel(nome, sobrenome, email, pass);
  } catch (error) {
    return res.status(400).send(error.message);
  }

  return res.status(201).send("Usuário cadastrado com sucesso");
}

async function getAllUsers(req, res) {
  try {
    var users = await userModel.getAllUsersModel();
  } catch (error) {
    return res.status(400).send(error.message);
  }

  return res.send(users);
}

async function getUserById(req, res) {
  const { id } = req.params;

  try {
    var user = await userModel.getUserByIdModel(id);
  } catch (error) {
    return res.status(400).send(error.message);
  }

  return res.status(200).send(user);
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { email, senha } = req.body;

  try {
    await userModel.updateUserModel(id, email, senha);
  } catch (error) {
    return res.status(400).send(error.message);
  }

  return res.status(201).send("Dados atualizados com sucesso");
}

async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    await userModel.deleteUserModel(id);
  } catch (error) {
    return res.status(400).send(error.message);
  }

  return res.status(201).send("Usuário Excluído Com Sucesso");
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};
