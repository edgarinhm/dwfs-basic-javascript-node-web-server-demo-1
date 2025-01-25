const { MongoClient, ObjectId } = require('mongodb');
const { connectToDb } = require('./models/mongodb/connection');

const Usuario = require('./models/mongodb/usuario');
const Pedido = require('./models/mongodb/pedido');
const Producto = require('./models/mongodb/producto');

const { UserRepository } = require('./repositories/mongodb/user-repository');
const { OrderRepository } = require('./repositories/mongodb/order-repository');
const { ProductRepository } = require('./repositories/mongodb/product-repository');


const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const pedidosRoutes = require('./routes/pedidos');


// Start the server
async function startServer(server, app) {

    // Add api routes
    app.use('/usuarios', usuariosRoutes({ Usuario, UserRepository }));
    app.use('/productos', productosRoutes({ Producto, ProductRepository }));
    app.use('/pedidos', pedidosRoutes({ Pedido, OrderRepository }));

    await connectToDb(MongoClient, ObjectId);
    server.start(app);
};

module.exports = startServer