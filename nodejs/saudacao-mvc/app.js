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

// usuarios
const userRoutes = require('./routes/usuarios');
app.use('/usuarios', userRoutes);

// produtos
const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);// Clientes

// clientes
const clientesRoutes = require('./routes/clientes');
app.use('/clientes', clientesRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


