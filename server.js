// Import required modules
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const { APP_PORT, APP_HOST } = require('./constants/environment-constants');
const { httpStatus } = require('./constants/http-constants');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const pedidosRoutes = require('./routes/pedidos');
const { apiUrlPedidos, apiUrlProductos, apiUrlUsuarios } = require('./constants/api-constants')

// Create an Express application
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.render('index', { apiUrlProductos: apiUrlProductos, apiUrlPedidos:apiUrlPedidos, apiUrlUsuarios:apiUrlUsuarios });
});

// Add api routes
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
app.use('/pedidos', pedidosRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(httpStatus.SERVER_ERROR).send('Something Went Wrong!');
  });

// Start the server
sequelize.sync().then(() => {
    app.listen(APP_PORT, () => {
        console.log(`Servidor corriendo en ${APP_HOST}:${APP_PORT}`);
    });
});