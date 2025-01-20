const { APP_HOST, APP_PORT } = require("./environment-constants");

export const apiUrlUsuarios = `${APP_HOST}:${APP_PORT}/usuarios`;
export const apiUrlProductos = `${APP_HOST}:${APP_PORT}/productos`;
export const apiUrlPedidos = `${APP_HOST}:${APP_PORT}/pedidos`;