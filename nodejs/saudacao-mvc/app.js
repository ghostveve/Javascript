const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// users
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// music
const musicRoutes = require('./routes/music');
app.use('/music', musicRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
