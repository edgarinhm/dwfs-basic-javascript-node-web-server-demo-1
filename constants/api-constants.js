const APP_HOST = process.env.APP_HOST || 'http://localhost';
const APP_PORT = process.env.APP_PORT || 3000;

const apiUrlUsuarios = `${APP_HOST}:${APP_PORT}/usuarios`;
const apiUrlProductos = `${APP_HOST}:${APP_PORT}/productos`;
const apiUrlPedidos = `${APP_HOST}:${APP_PORT}/pedidos`;

module.exports = { APP_HOST, APP_PORT, apiUrlUsuarios, apiUrlProductos, apiUrlPedidos };