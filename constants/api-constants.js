export const APP_HOST = process.env.APP_HOST || 'http://localhost';
export const APP_PORT = process.env.APP_PORT || 3000;

export const apiUrlUsuarios = `${APP_HOST}:${APP_PORT}/usuarios`;
export const apiUrlProductos = `${APP_HOST}:${APP_PORT}/productos`;
export const apiUrlPedidos = `${APP_HOST}:${APP_PORT}/pedidos`;