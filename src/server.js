// O que falta:
// 1- Tratamento de Erros no Servidor

const app = require('./app');
const dotenv = require('dotenv');
const port = 3015;

dotenv.config();

app.listen (port, () => {
    console.log (`Servidor rodando na porta http://localhost:${port}`);
});
