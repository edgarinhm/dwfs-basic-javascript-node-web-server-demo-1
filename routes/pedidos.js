const express = require('express');
const router = express.Router();
const { MakeGetOrders, MakeCreateOrder, MakeUpdateOrder, MakeDeleteOrder } = require('../controllers/order-controller');
const httpStatus = require('../constants/http-constants');

const createRouter = ({ Pedido, OrderRepository }) => {
    // Crear pedido
    router.post('/', async (req, res) => {
        const { usuario_id, producto_id, cantidad } = req.body;
        try {
            const orderRepository = new OrderRepository({ orderModel: Pedido });
            const createOrder = MakeCreateOrder(orderRepository);
            const pedido = await createOrder({ usuario_id, producto_id, cantidad });
            res.json(pedido);
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }
    });

    // Obtener todos los pedidos
    router.get('/', async (req, res) => {
        try {
            const orderRepository = new OrderRepository({ orderModel: Pedido });
            const getOrders = MakeGetOrders(orderRepository);
            const pedidos = await getOrders();
            res.json(pedidos);
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }

    });

    // Actualizar pedido
    router.put('/:id', async (req, res) => {
        const { id } = req.params;
        const { usuario_id, producto_id, cantidad } = req.body;
        try {
            const orderRepository = new OrderRepository({ orderModel: Pedido });
            const updateOrder = MakeUpdateOrder(orderRepository);
            await updateOrder({ id, usuario_id, producto_id, cantidad });
            res.json({ mensaje: 'Pedido actualizado' });
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }
    });

    // Eliminar pedido
    router.delete('/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const orderRepository = new OrderRepository({ orderModel: Pedido });
            const deleteOrder = MakeDeleteOrder(orderRepository);
            await deleteOrder(id);
            res.json({ mensaje: 'Pedido eliminado' });
        } catch (error) {
            return res.status(error.status || httpStatus.SERVER_ERROR).json(error);
        }
    });
    return router
}


module.exports = createRouter;

