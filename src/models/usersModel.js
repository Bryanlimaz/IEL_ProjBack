const connection = require("./connection");

async function insertUserModel(nome, sobrenome, email, senha) {
  await connection.query(`
    INSERT INTO users (nome, sobrenome, email, senha) VALUES (
        '${nome}',
        '${sobrenome}',
        '${email}',
        '${senha}'
    )`);

  return;
}

async function getAllUsersModel() {
  const users = await connection.query(
    "SELECT id, nome, sobrenome, email FROM users"
  );

  return users.rows;
}

async function getUserByIdModel(id) {
  const user = await connection.query(
    `SELECT id, nome, sobrenome, email FROM users WHERE id = ${id}`
  );

  return user.rows[0];
}

async function updateUserModel(id, email, senha) {
    await connection.query(`
      UPDATE users SET email = '${email}', senha = '${senha}' WHERE id = ${id}
    `);
  
    return;
  }

async function deleteUserModel(id) {
  await connection.query(`DELETE FROM users WHERE id = ${id}`);

  return;
}

module.exports = {
  insertUserModel,
  getUserByIdModel,
  getAllUsersModel,
  updateUserModel,
  deleteUserModel,
};
