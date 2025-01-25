const sequelize = require('./database');

const Usuario = require('./models/usuario');
const Producto = require('./models/producto');
const Pedido = require('./models/pedido');

const { UserRepository } = require('./repositories/sequelize/user-repository');
const { ProductRepository } = require('./repositories/sequelize/product-repository');
const { OrderRepository } = require('./repositories/sequelize/order-repository');

const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const pedidosRoutes = require('./routes/pedidos');

// Start the server
async function startServer(server, app) {

    // Add api routes
    app.use('/usuarios', usuariosRoutes({ Usuario, UserRepository }));
    app.use('/productos', productosRoutes({ Producto, ProductRepository }));
    app.use('/pedidos', pedidosRoutes({ Pedido, OrderRepository }));

    sequelize.sync().then(() => {
        server.start(app);
    });
};

module.exports = startServer