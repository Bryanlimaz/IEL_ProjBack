const express = require ('express');
const router = require ('../src/routers/router');
const routerUser = require ('../src/routers/routerUsers');
// const routerAuth = require ('./src/routers/authRouter')
const app = express();
app.use(express.json());

app.use(router);
app.use(routerUser);
// app.use(routerAuth);

module.exports = app