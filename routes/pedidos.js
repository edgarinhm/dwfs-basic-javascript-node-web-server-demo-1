const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

// Crear pedido
router.post('/', async (req, res) => {
    const { usuario_id, producto_id, cantidad } = req.body;
    const pedido = await Pedido.create({ usuario_id, producto_id, cantidad });
    res.json(pedido);
});

// Obtener todos los pedidos
router.get('/', async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
});

// Actualizar pedido
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { usuario_id, producto_id, cantidad } = req.body;
    await Pedido.update({ usuario_id, producto_id, cantidad }, { where: { id } });
    res.json({ mensaje: 'Pedido actualizado' });
});

// Eliminar pedido
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Pedido.destroy({ where: { id } });
    res.json({ mensaje: 'Pedido eliminado' });
});

module.exports = router;

